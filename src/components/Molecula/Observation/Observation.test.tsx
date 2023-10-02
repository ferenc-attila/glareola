import { fireEvent, render } from '@testing-library/react-native/build/pure';
import { screen } from '@testing-library/react-native/build/screen';

import { Observation } from './Observation';
import { mockBirdingHuData } from './__fixtures__/mockData';

describe('Observation', () => {
    test('should render correctly', () => {
        const container = render(<Observation {...mockBirdingHuData} />);
        expect(container.toJSON()).toMatchSnapshot();
    });

    test('should open image modal if show image button pressed', async () => {
        render(<Observation {...mockBirdingHuData} />);
        const imageButton = screen.getByLabelText('Show image button');
        fireEvent.press(imageButton);
        expect(screen.getByLabelText('Image created during observation: Glareola pratincola')).toBeTruthy();
    });

    test('should close image modal if close button pressed', async () => {
        render(<Observation {...mockBirdingHuData} />);
        const imageButton = screen.getByLabelText('Show image button');
        fireEvent.press(imageButton);
        const closeButton = screen.getByLabelText('Close button');
        fireEvent.press(closeButton);
        expect(screen.queryByLabelText('Image created during observation: Glareola pratincola')).toBeFalsy();
    });
});
