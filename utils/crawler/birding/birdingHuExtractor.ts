import axios from 'axios';
import { load } from 'cheerio';
import getBirdingHuData from './birdingDataExtractor'
import { IBirdingHuData } from "../../../types/types";

export default class BirdingHuExtractor {

    private readonly urls: string[];

    constructor(urls: string[]) {
        this.urls = urls;
    }

    async getLinks() {
        let pages = '';
        for (const url of this.urls) {
            await axios.get(url).then((response) => {
                pages += response.data;
            });
        }

        const cheerioAPI = load(pages);
        const observationsTable = cheerioAPI('#obstable');
        const formDataLinks: string[] = [];

        observationsTable.find('a').each((index, element) => {
            const link = cheerioAPI(element).attr('href');

            if (link && link.startsWith('http://birding.hu/megfigyeles/adatlap')) {
                formDataLinks.push(link);
            }
        });

        return formDataLinks;
    }

    async getData() {
        const formDataLinks = await this.getLinks();
        const birdingData = [] as IBirdingHuData[];
        for (const url of formDataLinks) {
            birdingData.push(await getBirdingHuData(url));
        }
        return birdingData;
    }
}
