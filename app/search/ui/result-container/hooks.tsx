import { useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import { fetcherGetJson } from '@/app/lib/fetcher';

const useHooks = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const qsPage = searchParams.get('page') || 1;
  const qsKeyword = searchParams.get('keyword') || '';
  const qsRating = searchParams.get('rating') || '';
  const url = `/api/gifs?page=${qsPage}&rating=${qsRating}&keyword=${qsKeyword}`;
  const { data, isLoading, isValidating, error } = useSWR(url, fetcherGetJson);

  const handlePrevPage = () => {
    const newPage = Number(qsPage) - 1;
    push(`/search?page=${newPage}&rating=${qsRating}&keyword=${qsKeyword}`);
  };

  const handleNextPage = () => {
    const newPage = Number(qsPage) + 1;
    push(`/search?page=${newPage}&rating=${qsRating}&keyword=${qsKeyword}`);
  };

  return {
    data,
    error,
    isLoading,
    isValidating,
    handlePrevPage,
    handleNextPage,
  };
};

export default useHooks;
