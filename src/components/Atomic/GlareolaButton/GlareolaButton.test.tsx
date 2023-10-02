import { render, screen } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native/build/pure';

import { GlareolaButton } from './GlareolaButton';

describe('GlareolaButton', () => {
    test('renders correctly', () => {
        const button = render(
            <GlareolaButton
                onPress={() => {}}
                iconName='home'
                size={24}
                color='white'
                accessibilityLabel='testLabel'
            />,
        );
        expect(button.toJSON()).toMatchSnapshot();
    });

    test('calls onPress function when button pressed', async () => {
        const onPress = jest.fn();
        render(
            <GlareolaButton onPress={onPress} iconName='home' size={24} color='white' accessibilityLabel='testLabel' />,
        );
        fireEvent.press(screen.getByRole('button'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
