import { render } from '@testing-library/react';

import SuggestionContainer from '../index';

const mockData = ['Dogs', 'Cats'];
const mockAction = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockAction,
    };
  },
}));
const Component = <SuggestionContainer data={mockData} />;

it('SuggestionContainer unchanged', () => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
});
