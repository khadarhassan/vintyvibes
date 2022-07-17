import Client from 'shopify-buy';

export const client = Client.buildClient({
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
});

export const getProducts = async () => {
  const products = await client.product.fetchAll();
  return products;
};

export const getProductById = async (id) => {
  const product = await client.product.fetch(id);
  return product;
};

export const getCollections = async () => {
  const collections = await client.collection.fetchAll();
  return collections;
};

export const getCollectionById = async (id, productsFirst) => {
  const collection = await client.collection.fetch(id, { productsFirst });
  return collection;
};

export const createCheckOut = async () => {
  const checkout = await client.checkout.create();
  return checkout;
};

export const addLineItem = async (checkoutId, productId, quantity) => {
  const lineItem = await client.checkout.addLineItems(checkoutId, [
    { variantId: productId, quantity },
  ]);
  return lineItem;
};

export const updateLineItem = async (checkoutId, lineItemId, quantity) => {
  const lineItem = await client.checkout.updateLineItems(checkoutId, [
    { id: lineItemId, quantity },
  ]);
  return lineItem;
};

export const removeLineItem = async (checkoutId, lineItemId) => {
  const lineItem = await client.checkout.removeLineItems(checkoutId, [
    { id: lineItemId },
  ]);
  return lineItem;
};

export const addingDiscount = async (checkoutId, discountCode) => {
  const discount = await client.checkout.addDiscount(checkoutId, discountCode);
  return discount;
};

export const removeDiscount = async (checkoutId, discountCode) => {
  const discount = await client.checkout.removeDiscount(
    checkoutId,
    discountCode
  );
  return discount;
};
