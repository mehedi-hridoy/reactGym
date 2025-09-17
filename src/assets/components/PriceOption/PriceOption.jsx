import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option, isPopular = false }) => {
  const { name, price, features, billing_cycle } = option;
  
  return (
    <div className={`
      relative bg-white rounded-2xl p-8 shadow-xl border-2 
      transition-all duration-300 hover:scale-105 hover:shadow-2xl
      flex flex-col h-full
      ${isPopular 
        ? 'border-gradient-to-r from-purple-500 to-pink-500 bg-gradient-to-br from-purple-50 to-pink-50' 
        : 'border-gray-200 hover:border-purple-300'
      }
    `}>
      
      
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      
    
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
        
        
        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${price}
            </span>
            <span className="text-gray-600 ml-2 text-lg">
              /{billing_cycle === 'yearly' ? 'year' : 'month'}
            </span>
          </div>
          {billing_cycle === 'yearly' && (
            <div className="text-sm text-green-600 font-semibold mt-2">
              Save $240 per year!
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>

      
      <div className="mt-auto">
        <button className={`
          w-full py-4 px-6 rounded-xl font-bold text-lg
          transition-all duration-300 transform hover:scale-105
          focus:outline-none focus:ring-4 focus:ring-opacity-50
          ${isPopular
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-300 shadow-lg'
            : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-300 shadow-md'
          }
        `}>
          Get Started
        </button>
      </div>
        
        <div className={`
          h-1 w-full mt-6 rounded-full
          ${isPopular 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
            : 'bg-gray-200'
          }
        `} />
      </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
  isPopular: PropTypes.bool,
};

export default PriceOption;