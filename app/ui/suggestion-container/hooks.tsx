import { useRouter } from 'next/navigation';

import { useAppContext } from '@/app/state/context';
import { setKeyword } from '@/app/state/reducer';

const useHooks = () => {
  const { push } = useRouter();
  const { dispatch, state } = useAppContext();
  const { keyword, rating } = state;
  const handleClick = (word: string) => {
    dispatch(setKeyword(word));
    push(`/search?page=1&rating=${rating}&keyword=${word}`);
  };

  return {
    handleClick,
    keyword,
  };
};

export default useHooks;
