import { SOURCES } from '../../../../../constants';
import { IBirdingHuGalleryElement } from '../../../../../types/interfaces';

export const mockBirdingHuGalleryElement: IBirdingHuGalleryElement = {
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
    detailsUrl: '../../__fixtures__/birdingHuHtmlStrings.ts',
    cameraType: 'Canon EOS 5D Mark IV',
    cameraSettings: ['f/5.6', '1/1000', 'ISO 400'],
    imageLink: '../src/assets/images/glareola_pratincola.png',
};
