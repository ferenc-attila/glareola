import { render } from '@testing-library/react-native/build/pure';

import { Settings } from './Settings';

describe('Settings page', () => {
    test('should render correctly', () => {
        const container = render(<Settings />);
        expect(container.toJSON()).toMatchSnapshot();
    });
});
