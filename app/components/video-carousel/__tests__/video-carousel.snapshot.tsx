import { render } from '@testing-library/react';

import VideoCarousel from '../index';

it('VideoCarousel component unchanged', () => {
  const { container } = render(<VideoCarousel />);
  expect(container).toMatchSnapshot();
});
