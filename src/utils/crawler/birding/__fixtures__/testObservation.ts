import { IBirdingHuData } from '../../../../types/interfaces';

export const testObservation: IBirdingHuData = {
    source: 'birding.hu',
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
