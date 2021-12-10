import { render } from '@testing-library/react';
import Main from './Main';

test('renders items correctly', () => {
  const container = render(<Main />);
  expect(container).toMatchSnapshot();
});
