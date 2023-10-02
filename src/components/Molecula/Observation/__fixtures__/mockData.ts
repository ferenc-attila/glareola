import { SOURCES } from '../../../../constants';
import { IBirdingHuData } from '../../../../types/interfaces';

export const mockBirdingHuData: IBirdingHuData = {
    source: SOURCES.BIRDING_HU,
    webId: 1,
    speciesHun: 'Székicsér',
    speciesSci: 'Glareola pratincola',
    individuals: 1,
    date: '2021-05-01',
    locality: 'Budapest',
    county: 'Budapest',
    area: 'Parlament',
    latitude: 47.497913,
    longitude: 19.040236,
    observers: ['John Doe', 'Jane Doe'],
    uploader: 'John Doe',
    notes: 'Some comment',
    imageLink: 'assets/images/glareola_pratincola.png',
};
