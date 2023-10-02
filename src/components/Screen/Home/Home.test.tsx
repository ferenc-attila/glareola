import { render } from '@testing-library/react-native/build/pure';

import { Home } from './Home';
import { ABOUT } from '../../../constants';

describe('Home', () => {
    test('should render correctly', () => {
        const container = render(<Home />);
        expect(container.toJSON()).toMatchSnapshot();
    });

    test('image should have correct accessibility label', () => {
        const container = render(<Home />);
        expect(container.getByLabelText('Collared pratincole (Glareola pratincola)')).toBeTruthy();
    });

    test('version number should be correct', () => {
        const container = render(<Home />);
        expect(container.getByText(ABOUT.APP.VERSION)).toBeTruthy();
    });
});
