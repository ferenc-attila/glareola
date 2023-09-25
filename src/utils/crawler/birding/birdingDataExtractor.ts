import axios from 'axios';
import { load } from 'cheerio';

import { SOURCES } from '../../../constants';
import { IBirdingHuData } from '../../../types/types';

export default async function getBirdingHuData(url: string): Promise<IBirdingHuData> {
    const data = await axios.get(url).catch(err => {
        throw err;
    });
    const $ = load(data.data);
    const formTable = $('.formtable');
    const species = formTable.find('tr').eq(1).find('td').eq(1).text().trim();
    const location = formTable.find('tr').eq(3).find('td').eq(1).text().trim();
    const previewImageLink = formTable.find('.thickbox').find('img').attr('src');

    return {
        source: SOURCES.BIRDING_HU,
        webId: parseInt(url.split('/').pop() as string, 10),
        date: formTable.find('tr').eq(0).find('td').eq(1).text().trim(),
        speciesHun: species.split(' - ')[0].trim(),
        speciesSci: species.split(' - ')[1].trim(),
        individuals: parseInt(formTable.find('tr').eq(2).find('td').eq(1).text().trim(), 10),
        locality: location.split(', ')[0].trim(),
        county: location.split(', ').length > 1 ? location.split(', ')[1].trim() : '',
        area: formTable.find('tr').eq(4).find('td').eq(1).text().trim(),
        observers: formTable.find('tr').eq(5).find('td').eq(1).text().trim().split(', '),
        uploader: formTable.find('tr').eq(6).find('td').eq(1).text().trim(),
        notes: formTable.find('tr').eq(7).find('td').eq(1).text().trim(),
        // The coordinates are switched in the html, and there is a typo in the selector of the latitude.
        latitude: parseFloat(formTable.find('tr').eq(8).find('td').eq(1).find('#longitude').val() as string),
        longitude: parseFloat(formTable.find('tr').eq(8).find('td').eq(1).find('#lattitude').val() as string),
        imageLink: previewImageLink ? previewImageLink.replace('sma/sma_', '') : undefined,
    };
}
