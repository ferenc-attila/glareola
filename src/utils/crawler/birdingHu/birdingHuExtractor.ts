// This file is removed from test coverage checking because it is hard to test, and it will not be used in production.

import { load } from 'cheerio';

import { interpretBirdingHuData } from './birdingHuDataInterpreter';
import { interpretBirdingHuGallery } from './birdingHuGalleryInterpreter';
import { IBirdingHuData } from '../../../types/interfaces';
import { fetchHtml } from '../fetchPage';

export default class BirdingHuExtractor {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getDataLinks() {
        const data = await fetchHtml(this.url);
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
        try {
            const formDataLinks = await this.getDataLinks();
            const birdingData = [] as IBirdingHuData[];
            for (const url of formDataLinks) {
                const html = await fetchHtml(url);
                birdingData.push(interpretBirdingHuData(html, url));
            }
            return birdingData;
        } catch (error) {
            throw error;
        }
    }

    async getGallery() {
        const gallery = await fetchHtml(this.url);
        try {
            return await interpretBirdingHuGallery(gallery);
        } catch (error) {
            throw error;
        }
    }
}
