import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import VideoCarousel from '../index';

const mockDataVideos = [
  {
    id: '1',
    title: 'Gif 1',
    images: {
      original: {
        mp4: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif',
      },
    },
  },
  {
    id: '2',
    title: 'Gif 2',
    images: {
      original: {
        mp4: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif',
      },
    },
  },
];
const Component = <VideoCarousel videos={mockDataVideos} />;

describe('Video Carousel component test', () => {
  it('render check', () => {
    render(Component);

    const firstVideo = screen.getByTestId('video-0');
    const secondVideo = screen.getByTestId('video-1');

    expect(firstVideo).toHaveClass('block');
    expect(secondVideo).toHaveClass('hidden');
  });

  it('clicking next button changes the current video check', async () => {
    render(Component);

    const btnNext = screen.getByRole('button', { name: '>' });

    expect(btnNext).toBeEnabled();

    userEvent.click(btnNext);

    await waitFor(() =>
      expect(screen.getByTestId('video-0')).toHaveClass('hidden'),
    );

    const secondVideo = screen.getByTestId('video-1');

    expect(secondVideo).toHaveClass('block');
  });
});
