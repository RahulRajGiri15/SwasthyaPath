import React from "react";
import PropTypes from 'prop-types';

const NutritionInfo = ({ mealPlan }) => {
  // Add default value in case mealPlan is not passed or has no days
  const calculateTotalNutrition = () => {
    if (!mealPlan || !mealPlan.days || mealPlan.days.length === 0) {
      return { calories: 0, protein: 0, carbs: 0, fat: 0 };
    }

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    mealPlan.days.forEach((day) => {
      if (!day.meals) return;
      Object.values(day.meals).forEach((meal) => {
        meal.forEach((item) => {
          totalCalories += item.calories || 0;
          totalProtein += item.protein || 0;
          totalCarbs += item.carbs || 0;
          totalFat += item.fat || 0;
        });
      });
    });

    return {
      calories: Math.round(totalCalories / mealPlan.days.length),
      protein: Math.round(totalProtein / mealPlan.days.length),
      carbs: Math.round(totalCarbs / mealPlan.days.length),
      fat: Math.round(totalFat / mealPlan.days.length),
    };
  };

  const nutrition = calculateTotalNutrition();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">Average Daily Nutrition</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Calories</p>
          <p className="text-2xl font-bold">{nutrition.calories}</p>
        </div>
        <div>
          <p className="text-gray-600">Protein</p>
          <p className="text-2xl font-bold">{nutrition.protein}g</p>
        </div>
        <div>
          <p className="text-gray-600">Carbs</p>
          <p className="text-2xl font-bold">{nutrition.carbs}g</p>
        </div>
        <div>
          <p className="text-gray-600">Fat</p>
          <p className="text-2xl font-bold">{nutrition.fat}g</p>
        </div>
      </div>
    </div>
  );
};

NutritionInfo.propTypes = {
  mealPlan: PropTypes.shape({
    days: PropTypes.arrayOf(
      PropTypes.shape({
        meals: PropTypes.objectOf(
          PropTypes.arrayOf(
            PropTypes.shape({
              calories: PropTypes.number,
              protein: PropTypes.number,
              carbs: PropTypes.number,
              fat: PropTypes.number
            })
          )
        )
      })
    ).isRequired
  }).isRequired
};

export default NutritionInfo;
