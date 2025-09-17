import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Checkmark Icon */}
      <div className="flex-shrink-0">
        <svg 
          className="w-5 h-5 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      
      {/* Feature Text */}
      <span className="text-gray-700 text-sm font-medium leading-relaxed">
        {feature}
      </span>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Feature;