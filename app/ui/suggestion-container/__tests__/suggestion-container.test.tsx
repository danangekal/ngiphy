import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('Suggestion container test', () => {
  it('render check', () => {
    render(Component);

    const title = screen.getByRole('paragraph');
    const btnSuggestion = screen.getAllByRole('button');

    expect(title).toBeTruthy();
    expect(btnSuggestion).toHaveLength(2);
    expect(btnSuggestion[0]).toHaveClass('truncate');
    expect(btnSuggestion[1]).toHaveClass('me-2');
  });

  it('clicking one of suggestion check', async () => {
    render(Component);

    const btnSuggestion = screen.getAllByRole('button');

    expect(btnSuggestion[0]).toBeEnabled();

    userEvent.click(btnSuggestion[0]);

    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));

    expect(mockAction).toHaveBeenCalledWith(
      `/search?page=1&rating=&keyword=${mockData[0]}`,
    );
  });
});
