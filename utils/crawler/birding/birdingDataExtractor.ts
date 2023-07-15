import axios from 'axios';
import {load} from 'cheerio';
import {IBirdingHuData} from "../../../types/types";

export default async function getBirdingHuData(url: string): Promise<IBirdingHuData> {
    const {data} = await axios.get(url);
    const $ = load(data);
    const formTable = $('.formtable');
    const imageBox = $('.thickbox');
    const species = formTable.find('tr').eq(1).find('td').eq(1).text().trim();
    const location = formTable.find('tr').eq(3).find('td').eq(1).text().trim();

    return {
        id: parseInt(<string>url.split('/').pop()),
        date: formTable.find('tr').eq(0).find('td').eq(1).text().trim(),
        speciesHun: species.split(' - ')[0].trim(),
        speciesSci: species.split(' - ')[1].trim(),
        individuals: parseInt(formTable.find('tr').eq(2).find('td').eq(1).text().trim(), 10),
        locality: location.split(', ')[0].trim(),
        county: location.split(', ').length > 1 ? location.split(', ')[1].trim() : '',
        area: formTable.find('tr').eq(4).find('td').eq(1).text().trim(),
        observers: (formTable.find('tr').eq(5).find('td').eq(1).text().trim()).split(', '),
        uploader: formTable.find('tr').eq(6).find('td').eq(1).text().trim(),
        notes: formTable.find('tr').eq(7).find('td').eq(1).text().trim(),
        longitude: parseFloat(<string>formTable.find('tr').eq(8).find('td').eq(1).find('#longitude').val()),
        latitude: parseFloat(<string>formTable.find('tr').eq(8).find('td').eq(1).find('#latitude').val()),
        imageLink: imageBox ? imageBox.attr('href') : undefined,
    };
}

