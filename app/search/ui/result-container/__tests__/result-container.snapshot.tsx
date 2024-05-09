import { useSearchParams } from 'next/navigation';
import { render } from '@testing-library/react';

import ResultContainer from '../index';

const mockAction = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockAction,
    };
  },
  useSearchParams: jest.fn(),
}));

it('Result container unchanged', () => {
  const mockGet = jest.fn();
  mockGet.mockReturnValue({ page: 1, rating: 'g', keyword: 'animals' });

  (useSearchParams as jest.Mock).mockReturnValue({
    get: mockGet,
  });

  const { container } = render(<ResultContainer />);
  expect(container).toMatchSnapshot();
});
