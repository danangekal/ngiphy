import Strings from '@/app/strings';

const CategoriesContainer = ({ data }: any) => (
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
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>

      <p>{Strings.title_categories_container}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4">
      {data?.map(({ name, name_encoded }: any) => (
        <button
          key={name_encoded}
          className="border border-black dark:border-white text-white text-xs truncate me-2 bg-blue-500 px-2.5 py-0.5 my-0.5 rounded-full"
        >
          {name}
        </button>
      ))}
    </div>
  </div>
);

export default CategoriesContainer;
