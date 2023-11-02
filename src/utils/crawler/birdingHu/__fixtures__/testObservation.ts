import { SOURCES } from '../../../../constants';
import { IBirdingHuData } from '../../../../types/interfaces';

export const testObservation: IBirdingHuData = {
    source: SOURCES.BIRDING_HU,
    details: 'http://birding.hu/megfigyeles/adatlap/12345678',
    webId: 12345678,
    date: '1935. december 28.',
    speciesHun: 'Mezei veréb',
    speciesSci: 'Passer montanus',
    individuals: 1,
    locality: 'Eger',
    county: 'Heves',
    area: 'Nagy-Eged',
    observers: ['John Doe', 'Jane Doe'],
    uploader: 'Jack Doe',
    notes: 'Testing data',
    latitude: 47.927998,
    longitude: 20.410659,
    imageLink: '../src/assets/images/glareola_pratincola.png',
};

export const testGalleryElement = {
    id: '12345678',
    author: 'John Doe',
    source: SOURCES.BIRDING_HU,
    speciesHun: 'Székicsér',
    speciesSci: 'Glareola pratincola',
    date: '2021-05-01',
    locality: 'Budapest',
    area: 'Parlament',
    notes: 'Some comment',
    smallImageLink: '../src/assets/images/glareola_icon.png',
    detailsUrl: 'http://birding.hu/megfigyeles/adatlap/12345678',
    cameraType: 'Canon EOS 5D Mark IV',
    cameraSettings: ['f/5.6', '1/1000', 'ISO 400'],
    imageLink: '../src/assets/images/glareola_pratincola.png',
};
