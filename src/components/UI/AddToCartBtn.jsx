import React from "react";

const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-orange-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM8.5 5.75A.75.75 0 019.25 5h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM7.506 7.694a.75.75 0 01.938-.545l.001.001.001.001a8.252 8.252 0 014.109 0l.001-.001.001-.001a.75.75 0 01.938.545c.171.473.295.976.363 1.494H7.142c.068-.518.192-1.021.364-1.494zM10 15.25a5.236 5.236 0 00-4.25 2.033.75.75 0 01-1.121-.983 6.736 6.736 0 015.371-2.617c.375 0 .741.03 1.1.089V10.5A2.5 2.5 0 0012.5 8h-5A2.5 2.5 0 005 10.5v4.662A6.717 6.717 0 0110 15.25z"
      clipRule="evenodd"
    />
    <path d="M3.245 16.44a8.25 8.25 0 0013.51 0 .75.75 0 00-1.122-.984 6.75 6.75 0 01-11.266 0 .75.75 0 00-1.122.984z" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const AddToCartBtn = () => {
  return (
    <div>
      <FireIcon />
      <PlusIcon />
    </div>
  );
};

export default AddToCartBtn;
