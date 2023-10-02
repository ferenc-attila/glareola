// This file is removed from test coverage checking because it is hard to test, and it will not be used in production.

import axios from 'axios';
import { load } from 'cheerio';

import getBirdingHuData, { fetchBirdingHuData } from './birdingDataExtractor';
import { IBirdingHuData } from '../../../types/interfaces';

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
                const html = await fetchBirdingHuData(url);
                birdingData.push(getBirdingHuData(html, url));
            }
            return birdingData;
        } catch (error) {
            throw error;
        }
    }
}
