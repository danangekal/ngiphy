import type { Metadata } from 'next';

import {
  getCategoriesData,
  getTrendingData,
  getTrendingSearchData,
} from './action';
import CategoriesContainer from './ui/categories-container';
import SearchContainer from './ui/search-container';
import SuggestionContainer from './ui/suggestion-container';
import TrendingContainer from './ui/trending-container';
import Strings from './strings';

export const metadata: Metadata = {
  title: `${Strings.title_home} - ${Strings.title_app}`,
  description: Strings.desc_home,
};

export default async function HomePage() {
  const trending = await getTrendingData();
  const trendingSearch = await getTrendingSearchData();
  const categories = await getCategoriesData();

  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* search container */}
      <SearchContainer type="home" />

      {/* suggestion trending search container */}
      <SuggestionContainer data={trendingSearch?.data} />

      {/* trending gif container */}
      <TrendingContainer data={trending?.data} />

      {/* categories gif container */}
      <CategoriesContainer data={categories?.data} />
    </main>
  );
}
