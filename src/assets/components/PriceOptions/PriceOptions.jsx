import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 25,
      currency: "USD",
      billing_cycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free drinking water",
        "1 fitness assessment session",
        "Cardio and strength training area",
        "Access during off-peak hours",
        "Mobile app for workout tracking",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 45,
      currency: "USD",
      billing_cycle: "monthly",
      features: [
        "All Basic Plan features",
        "Group fitness classes",
        "Yoga & Zumba sessions",
        "Discount on protein shakes",
        "2 personal training sessions",
        "Extended opening hours access",
        "Body composition analysis",
        "Access to stretching & mobility area",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 70,
      currency: "USD",
      billing_cycle: "monthly",
      features: [
        "All Standard Plan features",
        "Unlimited personal training",
        "Access to sauna & steam room",
        "Nutritional guidance",
        "Priority customer support",
        "Swimming pool access",
        "Massage therapy discount",
        "Custom diet & workout plan",
        "Free guest pass (2 per month)",
        "Access to functional training zone",
      ],
    },
    {
      id: 4,
      name: "Annual Elite Plan",
      price: 600,
      currency: "USD",
      billing_cycle: "yearly",
      features: [
        "All Premium Plan features",
        "Exclusive VIP lounge access",
        "Free branded gym merchandise",
        "Quarterly health check-ups",
        "Bring-a-friend pass (5 per year)",
        "Dedicated locker & towel service",
        "Free participation in fitness events",
        "One-on-one sessions with nutritionist",
        "Access to spa & relaxation zone",
        "Unlimited access to workshops & seminars",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your fitness potential with our flexible membership options. 
            From beginner-friendly basics to premium elite experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {priceOptions.map((option, index) => (
            <PriceOption 
              key={option.id} 
              option={option}
              isPopular={option.name === "Premium Plan"} 
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Still not sure which plan is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a free consultation with our fitness experts to find the perfect plan for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceOptions;