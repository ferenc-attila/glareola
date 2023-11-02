import { testObservation } from './__fixtures__/testObservation';
import { interpretBirdingHuData } from './birdingHuDataInterpreter';
import { birdingHuDataHtmlStrings } from '../../../../__fixtures__/birdingHuHtmlStrings';

describe('birdingDataExtractor', () => {
    test('getBirdingHuData converts correctly', () => {
        const data = interpretBirdingHuData(birdingHuDataHtmlStrings, 'http://birding.hu/megfigyeles/adatlap/12345678');
        expect(data).toEqual(testObservation);
    });
});
