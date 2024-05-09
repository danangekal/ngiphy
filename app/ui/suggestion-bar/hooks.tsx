import { useRouter } from 'next/navigation';

import { useAppContext } from '@/app/state/context';
import { setKeyword } from '@/app/state/reducer';

const useHooks = () => {
  const { push } = useRouter();
  const { dispatch, state } = useAppContext();
  const { keyword, rating } = state;
  const handleClick = (word: string) => {
    dispatch(setKeyword(word));
    push(`/search?keyword=${word}&rating=${rating}`);
  };

  return {
    handleClick,
    keyword,
  };
};

export default useHooks;
