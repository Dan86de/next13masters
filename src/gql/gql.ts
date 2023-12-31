/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    id\n    category_name\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetByName($name: String!) {\n  category(name: $name) {\n    id\n    category_name\n    variations {\n      id\n      name\n      variation_options {\n        id\n        value\n      }\n    }\n  }\n}": types.CategoryGetByNameDocument,
    "query CollectionGetByName($collectionName: String!) {\n  collection(collectionName: $collectionName) {\n    id\n    name\n  }\n}": types.CollectionGetByNameDocument,
    "query CollectionsGetList($skip: Int, $take: Int) {\n  collections(skip: $skip, take: $take) {\n    id\n    name\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetByCollectionId($collectionId: ID!) {\n  productsFromCollection(collectionId: $collectionId) {\n    id\n    name\n    description\n    product_image\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n    category {\n      id\n      category_name\n    }\n  }\n}": types.ProductGetByCollectionIdDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n      variations {\n        id\n        name\n      }\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetByCategoryId($categoryId: ID!) {\n  productsFromCategory(categoryId: $categoryId) {\n    id\n    name\n    description\n    product_image\n    category {\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}": types.ProductGetByCategoryIdDocument,
    "query ProductsByName($name: String!) {\n  productsByName(name: $name) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}": types.ProductsByNameDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "mutation ShoppingCartAddItem($cartId: String!, $productItemId: String!, $qty: Int) {\n  addItemToCart(cartId: $cartId, productItemId: $productItemId, qty: $qty) {\n    id\n  }\n}": types.ShoppingCartAddItemDocument,
    "mutation ShoppingCartCreate($userId: String!) {\n  createShoppingCart(userId: $userId) {\n    id\n  }\n}": types.ShoppingCartCreateDocument,
    "mutation ShoppingCartDecrementItemQty($cartId: String!, $shoppingCartItemId: String!) {\n  reduceItemQtyInCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {\n    id\n  }\n}": types.ShoppingCartDecrementItemQtyDocument,
    "query ShoppingCartGetById($cartId: ID!) {\n  shoppingCartGetByCartId(cartId: $cartId) {\n    id\n    shopping_cart_item {\n      id\n      cart_id\n      product_item_id\n      product_item {\n        id\n        product_id\n        SKU\n        qty_in_stock\n        price\n        product_images\n      }\n      qty\n    }\n  }\n}": types.ShoppingCartGetByIdDocument,
    "mutation ShoppingCartIncrementItemQty($shoppingCartItemId: String!, $qty: Int) {\n  incrementItemQtyInCart(shoppingCartItemId: $shoppingCartItemId, qty: $qty) {\n    id\n  }\n}": types.ShoppingCartIncrementItemQtyDocument,
    "mutation ShoppingCartRemoveItem($cartId: String!, $shoppingCartItemId: String!) {\n  removeItemFromCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {\n    id\n  }\n}": types.ShoppingCartRemoveItemDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    id\n    category_name\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetByName($name: String!) {\n  category(name: $name) {\n    id\n    category_name\n    variations {\n      id\n      name\n      variation_options {\n        id\n        value\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetByName($collectionName: String!) {\n  collection(collectionName: $collectionName) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($skip: Int, $take: Int) {\n  collections(skip: $skip, take: $take) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCollectionId($collectionId: ID!) {\n  productsFromCollection(collectionId: $collectionId) {\n    id\n    name\n    description\n    product_image\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n    category {\n      id\n      category_name\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCollectionIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n      variations {\n        id\n        name\n      }\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCategoryId($categoryId: ID!) {\n  productsFromCategory(categoryId: $categoryId) {\n    id\n    name\n    description\n    product_image\n    category {\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCategoryIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByName($name: String!) {\n  productsByName(name: $name) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ShoppingCartAddItem($cartId: String!, $productItemId: String!, $qty: Int) {\n  addItemToCart(cartId: $cartId, productItemId: $productItemId, qty: $qty) {\n    id\n  }\n}"): typeof import('./graphql').ShoppingCartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ShoppingCartCreate($userId: String!) {\n  createShoppingCart(userId: $userId) {\n    id\n  }\n}"): typeof import('./graphql').ShoppingCartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ShoppingCartDecrementItemQty($cartId: String!, $shoppingCartItemId: String!) {\n  reduceItemQtyInCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {\n    id\n  }\n}"): typeof import('./graphql').ShoppingCartDecrementItemQtyDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ShoppingCartGetById($cartId: ID!) {\n  shoppingCartGetByCartId(cartId: $cartId) {\n    id\n    shopping_cart_item {\n      id\n      cart_id\n      product_item_id\n      product_item {\n        id\n        product_id\n        SKU\n        qty_in_stock\n        price\n        product_images\n      }\n      qty\n    }\n  }\n}"): typeof import('./graphql').ShoppingCartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ShoppingCartIncrementItemQty($shoppingCartItemId: String!, $qty: Int) {\n  incrementItemQtyInCart(shoppingCartItemId: $shoppingCartItemId, qty: $qty) {\n    id\n  }\n}"): typeof import('./graphql').ShoppingCartIncrementItemQtyDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ShoppingCartRemoveItem($cartId: String!, $shoppingCartItemId: String!) {\n  removeItemFromCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {\n    id\n  }\n}"): typeof import('./graphql').ShoppingCartRemoveItemDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
