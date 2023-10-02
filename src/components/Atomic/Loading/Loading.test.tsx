import renderer from 'react-test-renderer';

import { Loading } from './Loading';

describe('Loading', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Loading />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
