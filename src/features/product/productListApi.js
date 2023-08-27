export const fetchProduct = (amount = 1) => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://fakestoreapi.com/products?amount=${amount}`
    );
    const data = await response.json();
    resolve(data);
  });
};
