import React, { useState } from "react";
import UserProfile from "./UserProfile";
import MealPlan from "./MealPlan";
import FoodDelivery from "./FoodDelivery";
import Nutritioninfo from './NutritionInfo';

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  const handleProfileSubmit = (profile) => {
    setUserProfile(profile);
    setActiveTab("mealPlan");
  };

  const handleMealPlanGenerated = (plan) => {
    setMealPlan(plan);
    setActiveTab("foodDelivery");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Personalized Nutrition and Health App
        </h1>
        <div className="mb-6">
          <nav className="flex border-b border-gray-200">
            <button
              className={`mr-4 py-2 px-4 ${
                activeTab === "profile"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`mr-4 py-2 px-4 ${
                activeTab === "mealPlan"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("mealPlan")}
              disabled={!userProfile}
            >
              Meal Plan
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "foodDelivery"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("foodDelivery")}
              disabled={!mealPlan}
            >
              Food Delivery
            </button>
          </nav>
        </div>
        {activeTab === "profile" && (
          <UserProfile onSubmit={handleProfileSubmit} />
        )}
        {activeTab === "mealPlan" && (
          <MealPlan
            userProfile={userProfile}
            onMealPlanGenerated={handleMealPlanGenerated}
          />
        )}
        {activeTab === "foodDelivery" && <FoodDelivery mealPlan={mealPlan} />}
      </div>

      <div>
        <Nutritioninfo />
      </div>
    </>
  );
};

export default Dashboard;
