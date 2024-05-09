import { Metadata } from 'next';

import SearchContainer from '@/app/ui/search-container';

import Strings from '../strings';
import ResultContainer from './ui/result-container';

export const metadata: Metadata = {
  title: `${Strings.title_search} - ${Strings.title_app}`,
  description: Strings.desc_search,
};

export default async function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* search container */}
      <SearchContainer type="search" />

      {/* result search container */}
      <ResultContainer />
    </main>
  );
}