import { render, screen } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native/build/pure';

import { GlareolaButton } from './GlareolaButton';
import { ICON_NAMES } from '../../../constants';

describe('GlareolaButton', () => {
    test('renders correctly', () => {
        const button = render(
            <GlareolaButton
                onPress={() => {}}
                iconName={ICON_NAMES.HOME}
                size={24}
                color='white'
                accessibilityLabel='testLabel'
            />,
        );
        expect(button.toJSON()).toMatchSnapshot();
    });

    test('calls onPress function when button pressed', async () => {
        const onPress = jest.fn();
        render(<GlareolaButton onPress={onPress} iconName={ICON_NAMES.HOME} accessibilityLabel='testLabel' />);
        fireEvent.press(screen.getByRole('button'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
