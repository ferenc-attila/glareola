import axios from 'axios';
import { load } from 'cheerio';

import getBirdingHuData from './birdingDataExtractor';
import { IBirdingHuData } from '../../../types/types';

export default class BirdingHuExtractor {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getLinks() {
        const data = await axios.get(this.url).catch(err => {
            throw err;
        });
        const $ = load(data.data);
        const observationsTable = $('#obstable');
        const formDataLinks: string[] = [];

        observationsTable.find('a').each((index, element) => {
            const link = $(element).attr('href');

            if (link && link.startsWith('http://birding.hu/megfigyeles/adatlap')) {
                formDataLinks.push(link);
            }
        });

        return formDataLinks;
    }

    async getData() {
        try {
            const formDataLinks = await this.getLinks();
            const birdingData = [] as IBirdingHuData[];
            for (const url of formDataLinks) {
                birdingData.push(await getBirdingHuData(url));
            }
            return birdingData;
        } catch (err) {
            return {
                message: 'Error while extracting data from birding.hu',
                error: err,
            };
        }
    }
}
