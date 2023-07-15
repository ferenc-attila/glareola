import axios from 'axios';
import { load } from 'cheerio';
import getBirdingHuData from './birdingDataExtractor'

export default class BirdingHuExtractor {

    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getLinks() {
        const { data } = await axios.get(this.url);
        const $ = load(data);
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
        const formDataLinks = await this.getLinks();
        const birdingData = [{}];
        formDataLinks.forEach(url => {
            birdingData.push(getBirdingHuData(url))
        });
        return birdingData;
    }
}
