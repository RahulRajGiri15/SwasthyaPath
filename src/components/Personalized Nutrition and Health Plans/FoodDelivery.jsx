import React, { useState } from "react";

const FoodDelivery = ({ mealPlan }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleItemToggle = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      items: selectedItems,
      address: deliveryAddress,
    });
    setSelectedItems([]);
    setDeliveryAddress("");
  };

  if (!mealPlan || !mealPlan.days) {
    return (
      <div className="text-center mt-10">
        Please generate a meal plan first.
      </div>
    );
  }

  const allItems = mealPlan.days.flatMap((day) =>
    Object.values(day.meals || {}).flat()
  );

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Order Ingredients</h2>
      <form onSubmit={handleSubmitOrder}>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Select Items to Order:</h3>
          <div className="space-y-2">
            {allItems.map((item, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleItemToggle(item)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Delivery Address
          </label>
          <textarea
            id="address"
            value={deliveryAddress}
            onChange={handleAddressChange}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="3"
            placeholder="Enter your delivery address"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={selectedItems.length === 0 || !deliveryAddress}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default FoodDelivery;
