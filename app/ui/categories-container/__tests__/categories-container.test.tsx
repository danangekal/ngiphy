import { render, screen } from '@testing-library/react';

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

describe('Categories container test', () => {
  it('render check', () => {
    render(Component);

    const title = screen.getByRole('paragraph');
    const btnCategories = screen.getAllByRole('button');

    expect(title).toBeTruthy();
    expect(btnCategories).toHaveLength(2);
    expect(btnCategories[0]).toHaveClass('truncate');
    expect(btnCategories[1]).toHaveClass('me-2');
  });
});
