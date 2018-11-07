import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'pjh-test.myshopify.com',
  storefrontAccessToken: '3b24c6d7feb9e05c065c0203369d2e57'
})

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateQuantity: () => {},
  toggleCart: () => {}
}

