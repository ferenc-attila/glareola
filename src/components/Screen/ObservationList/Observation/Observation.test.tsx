import { fireEvent, render } from '@testing-library/react-native/build/pure';
import { screen } from '@testing-library/react-native/build/screen';
import { Linking } from 'react-native';

import { Observation } from './Observation';
import { mockBirdingHuData } from './__fixtures__/mockData';

describe('Observation', () => {
    test('should render correctly', () => {
        const container = render(<Observation {...mockBirdingHuData} />);
        expect(container.toJSON()).toMatchSnapshot();
    });

    test('should render info button', () => {
        render(<Observation {...mockBirdingHuData} />);
        expect(screen.getByLabelText('Open observation details')).toBeTruthy();
    });

    test('should call function if info button pressed', () => {
        render(<Observation {...mockBirdingHuData} />);
        const infoButton = screen.getByLabelText('Open observation details');
        fireEvent.press(infoButton);
        expect(Linking.openURL).toBeCalledWith(mockBirdingHuData.details);
    });

    test('should render map button', () => {
        render(<Observation {...mockBirdingHuData} />);
        expect(screen.getByLabelText('Open map app on the location')).toBeTruthy();
    });

    test('should call function if map button pressed', () => {
        render(<Observation {...mockBirdingHuData} />);
        const mapButton = screen.getByLabelText('Open map app on the location');
        fireEvent.press(mapButton);
        expect(Linking.openURL).toBeCalledWith(
            `maps://0,0?q=${mockBirdingHuData.speciesHun}@${mockBirdingHuData.latitude},${mockBirdingHuData.longitude}`,
        );
    });

    test('should render observers and notes if notes exist', () => {
        render(<Observation {...mockBirdingHuData} />);
        expect(screen.getByText('Some comment')).toBeTruthy();
        expect(screen.getByText('John Doe, Jane Doe')).toBeTruthy();
    });

    test('should render only observers if notes do not exist', () => {
        render(<Observation {...mockBirdingHuData} notes='' />);
        expect(screen.queryByText('Some comment')).toBeFalsy();
        expect(screen.getByText('John Doe, Jane Doe')).toBeTruthy();
    });

    test('should render image button if image link exists', () => {
        render(<Observation {...mockBirdingHuData} />);
        expect(screen.getByLabelText('Show image button')).toBeTruthy();
    });

    test('should not render image button if image link does not exist', () => {
        render(<Observation {...mockBirdingHuData} imageLink='' />);
        expect(screen.queryByLabelText('Show image button')).toBeFalsy();
    });

    test('should open image modal if show image button pressed', async () => {
        render(<Observation {...mockBirdingHuData} />);
        const imageButton = screen.getByLabelText('Show image button');
        fireEvent.press(imageButton);
        const image = screen.getByLabelText('Image created during observation: Glareola pratincola');
        expect(image.props.accessibilityRole).toEqual('image');
        expect(image.props.source.uri).toEqual(mockBirdingHuData.imageLink);
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
