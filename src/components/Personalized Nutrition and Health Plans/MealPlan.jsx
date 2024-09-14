import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const MealPlan = ({ userProfile }) => {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateMealPlan = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/generate-meal-plan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        });
        if (!response.ok) {
          throw new Error("Failed to generate meal plan");
        }
        const data = await response.json();
        setMealPlan(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userProfile) {
      generateMealPlan();
    }
  }, [userProfile]);

  if (loading) {
    return (
      <div className="text-center mt-10">
        Generating your personalized meal plan...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  if (!mealPlan || !mealPlan.days) {
    return (
      <div className="text-center mt-10">
        No meal plan available. Please complete your profile.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Your Personalized Meal Plan</h2>
      {mealPlan.days.map((day, index) => (
        <div
          key={index}
          className="mb-8 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <h3 className="text-xl font-semibold bg-blue-500 text-white p-4">
            Day {index + 1}
          </h3>
          <div className="p-4">
            {day.meals && Object.entries(day.meals).map(([mealType, meal]) => (
              <div key={mealType} className="mb-4">
                <h4 className="text-lg font-medium capitalize mb-2">
                  {mealType}
                </h4>
                <ul className="list-disc list-inside">
                  {meal.map((item, i) => (
                    <li key={i} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

MealPlan.propTypes = {
  userProfile: PropTypes.object.isRequired
};

export default MealPlan;
