import Fire from "./../../assets/fire.png";
import Clock from "./../../assets/clock.png";

const FireIcon = () => <img src={Fire} className="w-6 h-6" />;

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

const ClockIcon = () => <img src={Clock} className="w-6 h-6" />;

const Meal = ({ title, price, imageUrl, calories, time }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs font-sans transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-lg font-bold text-gray-700">${price}</p>
      </div>

      {/* Image Section */}
      <div className="px-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg shadow-md"
          //   onError={(e) => {
          //     // Fallback image in case the provided imageUrl fails
          //     e.target.onerror = null; // Prevents infinite loop if placeholder also fails
          //     e.target.src = `https://placehold.co/300x200/e2e8f0/94a3b8?text=${title.replace(/\s/g, '+')}`;
          //   }}
        />
      </div>

      {/* Card Footer: Details and Add Button */}
      <div className="p-4 flex items-center justify-between">
        {/* Left side: Calories and Time */}
        <div className="space-y-2">
          {/* Calories information */}
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <FireIcon />
            <span>{calories} calories</span>
          </div>
          {/* Time information */}
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <ClockIcon />
            <span>{time}min</span>
          </div>
        </div>

        {/* Right side: Add Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          aria-label={`Add ${title} to cart`}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Meal;
