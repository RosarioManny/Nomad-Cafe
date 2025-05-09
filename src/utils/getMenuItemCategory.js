// utils/menuHelpers.js
import menuItems from "../database/menuItems";

export const getMenuByCategory = (category) => {
  return menuItems.find(item => item.category === category);
};

// export const getAllCategories = () => {
//   return menuItems.map(item => item.category);
// };

// Or if you prefer individual named functions:
export const getBagels = () => getMenuByCategory("Bagels");
export const getTravelerSandwich = () => getMenuByCategory("The Traveler Sandwich");
export const getSignatureDishes = () => getMenuByCategory("Signature Dishes");
export const getSandwiches = () => getMenuByCategory("Sandwiches");
export const getSides = () => getMenuByCategory("Sides");