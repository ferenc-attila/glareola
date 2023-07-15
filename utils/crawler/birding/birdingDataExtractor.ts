import axios from 'axios';
import {load} from 'cheerio';

export default async function getBirdingHuData(url: string) {
    const {data} = await axios.get(url);
    const $ = load(data);
    const formTable = $('.formtable');

    return {
        time: formTable.find('tr').eq(0).find('td').eq(1).text().trim(),
        species: formTable.find('tr').eq(1).find('td').eq(1).text().trim(),
        individuals: parseInt(formTable.find('tr').eq(2).find('td').eq(1).text().trim(), 10),
        locality: formTable.find('tr').eq(3).find('td').eq(1).text().trim(),
        area: formTable.find('tr').eq(4).find('td').eq(1).text().trim(),
        observers: formTable.find('tr').eq(5).find('td').eq(1).text().trim(),
        uploader: formTable.find('tr').eq(6).find('td').eq(1).text().trim(),
        notes: formTable.find('tr').eq(7).find('td').eq(1).text().trim(),
        longitude: formTable.find('tr').eq(8).find('td').eq(1).find('#longitude').val(),
        latitude: formTable.find('tr').eq(8).find('td').eq(1).find('#latitude').val(),
    };
}

