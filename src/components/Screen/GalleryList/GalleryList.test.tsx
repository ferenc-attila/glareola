import { waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import { render } from '@testing-library/react-native/build/pure';

import { GalleryList } from './GalleryList';

describe('GalleryList', () => {
    const testUrl = 'https://nosuchurl.this';

    test('should render loading spinner before fetching data', () => {
        const container = render(<GalleryList url={testUrl} />);
        expect(container.getByLabelText('loading')).toBeTruthy();
    });

    test('should render error message if fetching data failed', async () => {
        const container = render(<GalleryList url={testUrl} />);
        await waitForElementToBeRemoved(() => expect(container.getByLabelText('loading')));
        await waitFor(() => expect(container.getByLabelText('error message')));
        expect(container.getByLabelText('error message')).toBeTruthy();
    });

    test.skip('should render gallery if fetching data was successful', () => {
        // This is not working currently because I cannot mock the webpage.
        // TODO: refactor the code so that the webpage do not need to be mocked. We need state management to do this.
    });
});
