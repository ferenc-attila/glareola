import { waitFor } from '@testing-library/react-native';
import { fireEvent, render } from '@testing-library/react-native/build/pure';

import App from './App';

describe('App', () => {
    test('should render correctly', () => {
        const container = render(<App />);
        expect(container.toJSON).toMatchSnapshot();
    });

    describe('navigation', () => {
        test('loading the Home screen by default', () => {
            const container = render(<App />);
            expect(container.getByText('Glareola')).toBeTruthy();
            expect(container.getByText('A crawler for rarity observations')).toBeTruthy();
        });

        test('loading the About screen when about button pressed', async () => {
            const container = render(<App />);
            const aboutButton = container.getByLabelText('About button');
            fireEvent.press(aboutButton);
            expect(container.getByText('Cover Image')).toBeTruthy();
        });

        test.skip('loading the Observations screen when observations button pressed', async () => {
            // TODO: Refactor the code so that the url could come from settings, or .env file. We need state management to do this.
            const container = render(<App />);
            const observationsButton = container.getByLabelText('Observations button');
            await waitFor(() => fireEvent.press(observationsButton), { timeout: 3000 });
            expect(container.getByText('Observations')).toBeTruthy();
        });

        test('loading the Settings screen when setting button pressed', async () => {
            const container = render(<App />);
            const settingsButton = container.getByLabelText('Settings button');
            fireEvent.press(settingsButton);
            expect(container.getByText('Settings')).toBeTruthy();
        });

        test('loading the Home screen when home button pressed in Settings screen', async () => {
            const container = render(<App />);
            const settingsButton = container.getByLabelText('Settings button');
            fireEvent.press(settingsButton);
            const homeButton = container.getByLabelText('Home button');
            fireEvent.press(homeButton);
            expect(container.getByText('Glareola')).toBeTruthy();
            expect(container.getByText('A crawler for rarity observations')).toBeTruthy();
        });
    });

    describe('buttons', () => {
        test('should have correct accessibility label', () => {
            const container = render(<App />);
            expect(container.getByLabelText('Home button')).toBeTruthy();
            expect(container.getByLabelText('About button')).toBeTruthy();
            expect(container.getByLabelText('Observations button')).toBeTruthy();
            expect(container.getByLabelText('Settings button')).toBeTruthy();
        });
    });
});
