import { Metadata } from 'next';

import SearchBar from '@/app/ui/search-bar';

import Strings from '../strings';

export const metadata: Metadata = {
  title: `${Strings.title_search} - ${Strings.title_app}`,
  description: Strings.desc_search,
};

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* search bar */}
      <SearchBar page="search" />
    </main>
  );
}
