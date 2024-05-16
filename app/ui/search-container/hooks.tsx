import { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAppContext } from '@/app/state/context';
import { setKeyword, setRating } from '@/app/state/reducer';

const useHooks = (type: string) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const qsKeyword = searchParams.get('keyword') || '';
  const qsRating = searchParams.get('rating') || '';
  const { dispatch, state } = useAppContext();
  const { keyword, rating } = state;
  const keywordValue = keyword;
  const ratingValue = rating;
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
  };
  const handleKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === 'Enter') {
      push(`/search?page=1&rating=${ratingValue}&keyword=${keywordValue}`);
    }
  };
  const handleClickRating = (value: string) => {
    dispatch(setRating(value));
    if (type === 'search') {
      push(`/search?page=1&rating=${value}&keyword=${keywordValue}`);
    }
  };

  useEffect(() => {
    if (qsKeyword) {
      dispatch(setKeyword(qsKeyword));
    }

    if (qsRating) {
      dispatch(setRating(qsRating));
    }
  }, [dispatch, qsKeyword, qsRating]);

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
