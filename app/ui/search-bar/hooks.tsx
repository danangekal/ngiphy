import { ChangeEvent, KeyboardEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAppContext } from '@/app/state/context';
import { setKeyword, setRating } from '@/app/state/reducer';

const useHooks = (page: string) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const qsKeyword = searchParams.get('keyword');
  const qsRating = searchParams.get('rating');
  const { dispatch, state } = useAppContext();
  const { keyword, rating } = state;
  const keywordValue = page === 'home' ? keyword : qsKeyword || '';
  const ratingValue = page === 'home' ? rating : qsRating || '';
  const ratingOption = [
    {
      label: 'Level 1 - G',
      value: 'g',
    },
    {
      label: 'Level 2 - PG',
      value: 'pg',
    },
    {
      label: 'Level 3 - PG 13',
      value: 'pg-13',
    },
    {
      label: 'Level 4 - R',
      value: 'r',
    },
  ];
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e?.target?.value;
    dispatch(setKeyword(newValue));

    if (page === 'search') {
      push(`/search?keyword=${newValue}&rating=${qsRating}`);
    }
  };
  const handleKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === 'Enter' && page === 'home') {
      push(`/search?keyword=${keyword}&rating=${rating}`);
    }

    if (e?.key === 'Enter' && page === 'search') {
      push(`/search?keyword=${qsKeyword}&rating=${qsRating}`);
    }
  };
  const handleClickRating = (value: string) => {
    dispatch(setRating(value));
    if (page === 'search') {
      push(`/search?keyword=${qsKeyword}&rating=${value}`);
    }
  };

  return {
    handleChangeSearch,
    handleKeySearch,
    handleClickRating,
    keywordValue,
    ratingValue,
    ratingOption,
  };
};

export default useHooks;
