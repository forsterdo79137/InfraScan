const checkIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" className="fill-current">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const crossIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" className="fill-current">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center group cursor-pointer transition-all duration-200 hover:scale-105">
      <span className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
        status === "active" 
          ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-900/30" 
          : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-900/30"
      }`}>
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p className={`m-0 text-base font-medium transition-colors duration-200 ${
        status === "active" 
          ? "text-gray-900 dark:text-white" 
          : "text-gray-500 dark:text-gray-400"
      }`}>
        {text}
      </p>
    </div>
  );
};

export default OfferList;
