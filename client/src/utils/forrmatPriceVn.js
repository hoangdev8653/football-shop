export const formatPrice = (price) => {
  price = price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return price;
};
