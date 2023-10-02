import { render } from '@testing-library/react-native/build/pure';

import { About } from './About';

describe('About', () => {
    test('should render correctly', () => {
        const container = render(<About />);
        expect(container.toJSON()).toMatchSnapshot();
    });
});
