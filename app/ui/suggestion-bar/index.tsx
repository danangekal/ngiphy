'use client';

import Strings from '@/app/strings';

import useHooks from './hooks';

const SuggestionBar = ({ data }: any) => {
  const { handleClick, keyword } = useHooks();

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex flex-row space-x-1 py-4 text-sm text-blue-500 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
        <p>{Strings.title_suggestion_bar}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {data?.map((word: string) => (
          <button
            key={word}
            onClick={() => handleClick(word)}
            className={`border border-blue-500 text-blue-500 text-xs me-2 px-2.5 py-0.5 my-0.5 rounded-full
              ${keyword === word ? 'bg-blue-100' : ''}`}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBar;
