import beverageItems from "../database/beverageItems";

export const getMenuByCategory = (category) => {
  return beverageItems.find(item => item.category === category);
};

export const signatureLattes = () => getMenuByCategory("Signatures Lattes")
export const icedDrinks = () => getMenuByCategory("Iced Drinks")
export const hotDrinks = () => getMenuByCategory("Hot Drinks")
export const drinkExtras = () => getMenuByCategory("Extras")
