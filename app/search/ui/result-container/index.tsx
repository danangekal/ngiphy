'use client';

import DotLoading from '@/app/components/dot-loading';
import Strings from '@/app/strings';

import useHooks from './hooks';

const ResultContainer = () => {
  const {
    data,
    error,
    isLoading,
    isValidating,
    handleNextPage,
    handlePrevPage,
  } = useHooks();

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex flex-row items-start py-4 text-sm text-blue-500 ">
        <p>{Strings.title_search}</p>
      </div>
      <div className="flex flex-col items-center justify-between w-full">
        {isValidating && isLoading ? (
          <DotLoading />
        ) : error ? (
          <p className="text-red-500 text-md">{Strings.title_error_general}</p>
        ) : data?.data?.length ? (
          <>
            <div className="flex flex-row flex-wrap items-center justify-between">
              {data?.data?.map(({ id, images }: any) => (
                <video key={id} className="py-4" controls>
                  <source src={images?.fixed_height?.mp4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
            <div className="flex flex-row flex-wrap w-full items-center justify-between py-4 text-blue-500 text-xs sm:text-lg">
              <button
                className={`w-20 sm:w-32 flex items-center justify-center border px-2.5 py-0.5 rounded-md
                  ${data?.pagination?.offset === 0 ? 'bg-slate-100 text-slate-400 border-slate-400' : 'hover:bg-blue-100 border-blue-500'}
                `}
                disabled={data?.pagination?.offset === 0}
                onClick={handlePrevPage}
              >
                <svg
                  className="hidden sm:block w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Previous
              </button>
              <button
                className="w-20 sm:w-32 flex items-center justify-center border border-blue-500 px-2.5 py-0.5 hover:bg-blue-100 rounded-md"
                onClick={handleNextPage}
              >
                Next
                <svg
                  className="hidden sm:block w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <p className="text-blue-500 text-md">{Strings.title_no_data}</p>
        )}
      </div>
    </div>
  );
};

export default ResultContainer;
