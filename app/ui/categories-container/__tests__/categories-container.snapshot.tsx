import { render } from '@testing-library/react';

import CategoriesContainer from '../index';

const mockData = [
  {
    name: 'Category 1',
    name_encoded: 'category1',
  },
  {
    name: 'Category 2',
    name_encoded: 'category2',
  },
];
const Component = <CategoriesContainer data={mockData} />;

it('CategoriesContainer unchanged', () => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
});
