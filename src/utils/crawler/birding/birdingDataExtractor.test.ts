import { testObservation } from './__fixtures__/testObservation';
import getBirdingHuData from './birdingDataExtractor';
import { htmlString } from '../../../__fixtures__/htmlString';

describe('birdingDataExtractor', () => {
    test('getBirdingHuData converts correctly', () => {
        const data = getBirdingHuData(htmlString, 'http://birding.hu/megfigyeles/adatlap/12345678');
        expect(data).toEqual(testObservation);
    });
});
