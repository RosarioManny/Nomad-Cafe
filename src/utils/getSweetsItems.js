import sweetsItems from "../database/sweetsItems";

export const getMenuByCategory = (category) => {
  return sweetsItems.find(item => item.category === category);
};

export const pastrySweets = () => getMenuByCategory("Pastries")
export const gelatoSweets = () => getMenuByCategory("Gelatos")
