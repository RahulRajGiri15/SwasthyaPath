import React, { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    geneticData: null,
    medicalConditions: [],
    dietaryRestrictions: [],
    healthGoals: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prevProfile) => ({ ...prevProfile, geneticData: file }));
    }
  };

  const handleMultiSelect = (e, field) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", profile);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">User Profile</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={profile.age}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={profile.gender}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block mb-2">
          Height (cm)
        </label>
        <input
          type="number"
          id="height"
          name="height"
          value={profile.height}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="weight" className="block mb-2">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={profile.weight}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="activityLevel" className="block mb-2">
          Activity Level
        </label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={profile.activityLevel}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightly_active">Lightly Active</option>
          <option value="moderately_active">Moderately Active</option>
          <option value="very_active">Very Active</option>
          <option value="extra_active">Extra Active</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="geneticData" className="block mb-2">
          Genetic Data (upload file)
        </label>
        <input
          type="file"
          id="geneticData"
          name="geneticData"
          onChange={handleFileUpload}
          className="w-full p-2 border rounded"
          accept=".txt,.csv,.pdf"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="medicalConditions" className="block mb-2">
          Medical Conditions
        </label>
        <select
          id="medicalConditions"
          name="medicalConditions"
          multiple
          value={profile.medicalConditions}
          onChange={(e) => handleMultiSelect(e, "medicalConditions")}
          className="w-full p-2 border rounded"
          aria-multiselectable="true"
        >
          <option value="diabetes">Diabetes</option>
          <option value="hypertension">Hypertension</option>
          <option value="celiac_disease">Celiac Disease</option>
          <option value="heart_disease">Heart Disease</option>
          <option value="none">None</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="dietaryRestrictions" className="block mb-2">
          Dietary Restrictions
        </label>
        <select
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          multiple
          value={profile.dietaryRestrictions}
          onChange={(e) => handleMultiSelect(e, "dietaryRestrictions")}
          className="w-full p-2 border rounded"
          aria-multiselectable="true"
        >
          <option value="gluten_free">Gluten-Free</option>
          <option value="lactose_free">Lactose-Free</option>
          <option value="nut_free">Nut-Free</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="healthGoals" className="block mb-2">
          Health Goals
        </label>
        <select
          id="healthGoals"
          name="healthGoals"
          multiple
          value={profile.healthGoals}
          onChange={(e) => handleMultiSelect(e, "healthGoals")}
          className="w-full p-2 border rounded"
          aria-multiselectable="true"
        >
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="improve_stamina">Improve Stamina</option>
          <option value="overall_health">Overall Health</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Save Profile
      </button>
    </form>
  );
};

export default UserProfile;
