import { fireEvent, render } from '@testing-library/react-native/build/pure';
import { screen } from '@testing-library/react-native/build/screen';

import { GalleryElement } from './GalleryElement';
import { mockBirdingHuGalleryElement } from './__fixtures__/mockGallery';

describe('GalleryElement', () => {
    test('should render correctly', () => {
        const container = render(<GalleryElement {...mockBirdingHuGalleryElement} />);
        expect(container.toJSON()).toMatchSnapshot();
    });

    test('should render image button', () => {
        render(<GalleryElement {...mockBirdingHuGalleryElement} />);
        expect(screen.getByLabelText('Show image button')).toBeTruthy();
    });

    test('should open image modal if image button pressed', async () => {
        render(<GalleryElement {...mockBirdingHuGalleryElement} />);
        const imageButton = screen.getByLabelText('Show image button');
        fireEvent.press(imageButton);
        const image = screen.getByLabelText('Larger image Glareola pratincola');
        expect(image.props.accessibilityRole).toEqual('image');
        expect(image.props.source.uri).toEqual(mockBirdingHuGalleryElement.imageLink);
    });
});
