import { useSearchParams } from 'next/navigation';
import { render, screen } from '@testing-library/react';

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
const Component = <ResultContainer />;

describe('Result container test', () => {
  it('render check', () => {
    const mockGet = jest.fn();
    mockGet.mockReturnValue({ page: 1, rating: 'g', keyword: 'animals' });

    (useSearchParams as jest.Mock).mockReturnValue({
      get: mockGet,
    });

    render(Component);

    const paragraph = screen.getAllByRole('paragraph');

    expect(paragraph).toHaveLength(2);
    expect(paragraph).toBeTruthy();
  });
});
