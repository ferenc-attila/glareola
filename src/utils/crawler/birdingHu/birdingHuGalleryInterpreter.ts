import { load } from 'cheerio';

import { IBirdingHuGalleryElement, IBirdingHuGalleryElementBase } from '../../../types/interfaces';
import { fetchHtml } from '../fetchPage';

const interpretGalleryElementBases = async (data: string) => {
    const $ = load(data);
    const galleryTable = $('.TonusosDoboz');
    const galleryHTMLs: string[] = [];
    const galleryElementBases = [] as IBirdingHuGalleryElementBase[];

    galleryTable.find('div.Galeriak').each((index, element) => {
        galleryHTMLs.push($(element).html() as string);
    });
    for (const element of galleryHTMLs) {
        const galleryElementBase = {} as IBirdingHuGalleryElementBase;
        const galleryElement = $(element);

        const textInnerElements = galleryElement
            .find('div.Szoveg')
            .find('br')
            .replaceWith('/n')
            .end()
            .text()
            .split('/n');

        const detailsLink = galleryElement.find('a.thickbox').attr('href');
        if (!detailsLink) {
            break;
        }
        galleryElementBase.area = textInnerElements[0].split(',')[1]?.trim();
        galleryElementBase.author = galleryElement.find('div.CopyNev:first').eq(0).find('a').text().trim();
        galleryElementBase.date = textInnerElements[1].trim();
        galleryElementBase.smallImageLink = galleryElement.find('a.thickbox > img').attr('src') as string;
        galleryElementBase.detailsUrl = detailsLink;
        galleryElementBase.id = galleryElement.find('div.CopyNev:last > a').attr('href')?.split('/').pop() as string;
        galleryElementBase.locality = textInnerElements[0].split(',')[0].trim();
        galleryElementBase.notes = textInnerElements[2].replaceAll('\n', ' ').trim();
        galleryElementBase.source = 'Birding.hu';
        galleryElementBase.speciesHun = galleryElement.find('span#size_12 > b > a').text().trim();
        galleryElementBase.speciesSci = galleryElement.find('div.Madar > span > i').text().trim();

        galleryElementBases.push(galleryElementBase);
    }
    return galleryElementBases;
};

export const interpretBirdingHuGallery = async (data: string) => {
    const galleryElementBases = await interpretGalleryElementBases(data);
    const galleryElements = [] as IBirdingHuGalleryElement[];
    for (const galleryElementBase of galleryElementBases) {
        const detailsHTML = await fetchHtml(galleryElementBase.detailsUrl);
        const $ = load(detailsHTML);
        const table = $('table');
        const imageLink = table.find('tr:nth-child(3) > td:nth-child(1) > a.Bordo').attr('href');
        if (!imageLink) {
            break;
        }
        galleryElements.push({
            ...galleryElementBase,
            cameraType: table.find('tr:first > td:nth-child(2)').text().trim(),
            cameraSettings: table
                .find('tr:nth-child(2) > td:nth-child(2)')
                .text()
                .split(',')
                .map(setting => setting.trim()),
            imageLink,
        });
    }
    return galleryElements;
};
