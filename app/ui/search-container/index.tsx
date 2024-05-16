'use client';

import Strings from '@/app/strings';

import useHooks from './hooks';
import { SearchContainerProps } from './types';

const SearchContainer = ({ type }: SearchContainerProps) => {
  const {
    handleChangeSearch,
    handleKeySearch,
    handleClickRating,
    keywordValue,
    ratingValue,
    ratingOption,
  } = useHooks(type);

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {type === 'home' ? (
        <p className="py-4 font-medium sm:font-bold text-3xl sm:text-5xl text-blue-500">
          {Strings.title_app}
        </p>
      ) : (
        <a
          href="/"
          title={Strings.title_go_to_home}
          className="py-4 font-medium sm:font-bold text-3xl sm:text-5xl text-blue-500"
        >
          {Strings.title_app}
        </a>
      )}
      <div className="w-full sm:w-1/2 relative">
        <div>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            autoCorrect="off"
            autoComplete="off"
            id="search"
            name="search"
            value={keywordValue}
            onChange={handleChangeSearch}
            onKeyUp={handleKeySearch}
            placeholder={Strings.placeholder_search}
            className="block w-full p-4 ps-10 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 text-blue-500"
          />
        </div>
      </div>
      <div className="py-2 space-x-2 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-500">
        <p>{Strings.title_rating}</p>
        {ratingOption.map(({ label, value }: any) => (
          <button
            key={value}
            onClick={() => handleClickRating(value)}
            className={`border border-blue-500 me-2 px-2.5 py-0.5 my-0.5 rounded-full
              ${ratingValue === value ? 'bg-blue-200' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
