import type { Metadata } from 'next';

import {
  getCategoriesData,
  getTrendingData,
  getTrendingSearchData,
} from './action';
import CategoriesBar from './ui/categories-bar';
import SearchBar from './ui/search-bar';
import SuggestionBar from './ui/suggestion-bar';
import TrendingBar from './ui/trending-bar';
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
      {/* search bar */}
      <SearchBar page="home" />

      {/* suggestion trending search bar */}
      <SuggestionBar data={trendingSearch?.data} />

      {/* trending gif bar */}
      <TrendingBar data={trending?.data} />

      {/* categories gif bar */}
      <CategoriesBar data={categories?.data} />
    </main>
  );
}
