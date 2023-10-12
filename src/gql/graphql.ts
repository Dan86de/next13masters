/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Collection model. */
export type Collection = {
  /** Collection id. */
  id: Scalars['ID']['output'];
  /** Collection name. */
  name: Scalars['String']['output'];
  products: Array<Product>;
};

export type Mutation = {
  addItemToCart?: Maybe<ShoppingCartItem>;
  createProduct?: Maybe<Product>;
  createShoppingCart?: Maybe<ShoppingCart>;
  incrementItemQtyInCart?: Maybe<ShoppingCartWithItems>;
  reduceItemQtyInCart?: Maybe<ShoppingCartWithItems>;
  removeItemFromCart?: Maybe<ShoppingCartWithItems>;
};


export type MutationAddItemToCartArgs = {
  cartId: Scalars['String']['input'];
  productItemId: Scalars['String']['input'];
  qty?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateProductArgs = {
  createProductInput: Scalars['String']['input'];
};


export type MutationCreateShoppingCartArgs = {
  userId: Scalars['String']['input'];
};


export type MutationIncrementItemQtyInCartArgs = {
  qty?: InputMaybe<Scalars['Int']['input']>;
  shoppingCartItemId: Scalars['String']['input'];
};


export type MutationReduceItemQtyInCartArgs = {
  cartId: Scalars['String']['input'];
  shoppingCartItemId: Scalars['String']['input'];
};


export type MutationRemoveItemFromCartArgs = {
  cartId: Scalars['String']['input'];
  shoppingCartItemId: Scalars['String']['input'];
};

/** Product model. */
export type Product = {
  /** Product category. */
  category: ProductCategory;
  /** Product category id. */
  category_id: Scalars['String']['output'];
  collections: Array<ProductCollection>;
  /** Product description. */
  description: Scalars['String']['output'];
  /** Product id. */
  id: Scalars['ID']['output'];
  /** Product name. */
  name: Scalars['String']['output'];
  /** Product image. */
  product_image: Scalars['String']['output'];
  product_items: Array<ProductItem>;
};

/** Product category model */
export type ProductCategory = {
  category_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  parent_category_id?: Maybe<Scalars['String']['output']>;
  variations: Array<Variation>;
};

export type ProductCollection = {
  collection: Collection;
  collectionId: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
};

/** Product configuration model */
export type ProductConfiguration = {
  product: ProductItem;
  product_item_id: Scalars['String']['output'];
  variation_option: VariationOption;
  variation_option_id: Scalars['String']['output'];
};

export type ProductItem = {
  SKU: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  product_configurations?: Maybe<Array<ProductConfiguration>>;
  product_id: Scalars['String']['output'];
  product_images: Array<Scalars['String']['output']>;
  qty_in_stock: Scalars['Float']['output'];
};

export type Query = {
  /** Get all categories */
  categories: Array<ProductCategory>;
  /** Get single category by ID */
  category?: Maybe<ProductCategory>;
  /** Get single collection by name */
  collection?: Maybe<Collection>;
  /** Get all collections */
  collections: Array<Collection>;
  /** Get single product by ID */
  product?: Maybe<Product>;
  /** Get all products */
  products: Array<Product>;
  /** Search products by name */
  productsByName?: Maybe<Array<Product>>;
  /** Get all products from category with given category id. */
  productsFromCategory?: Maybe<Array<Product>>;
  /** Get all products from collection with given id. */
  productsFromCollection?: Maybe<Array<Product>>;
  /** Get single cart by ID */
  shoppingCartGetByCartId?: Maybe<ShoppingCartWithItems>;
  /** Get single cart by user ID */
  shoppingCartGetByUserId?: Maybe<ShoppingCart>;
  /** Get all shopping carts */
  shoppingCarts: Array<ShoppingCart>;
};


export type QueryCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  name: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collectionName: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryProductsFromCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryProductsFromCollectionArgs = {
  collectionId: Scalars['ID']['input'];
};


export type QueryShoppingCartGetByCartIdArgs = {
  cartId: Scalars['ID']['input'];
};


export type QueryShoppingCartGetByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryShoppingCartsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

/** Shopping cart model. */
export type ShoppingCart = {
  /** Shopping cart id. */
  id: Scalars['ID']['output'];
};

/** Shopping cart item model. */
export type ShoppingCartItem = {
  cart_id: Scalars['String']['output'];
  /** Shopping cart item id. */
  id: Scalars['ID']['output'];
  product_item: ProductItem;
  product_item_id: Scalars['String']['output'];
  qty: Scalars['Float']['output'];
};

/** Shopping cart with items. */
export type ShoppingCartWithItems = {
  /** Shopping cart id. */
  id: Scalars['ID']['output'];
  shopping_cart_item: Array<ShoppingCartItem>;
};

export type Variation = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  variation_options: Array<VariationOption>;
};

export type VariationOption = {
  id: Scalars['String']['output'];
  product_categoryId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CategoriesGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesGetListQuery = { categories: Array<{ id: string, category_name: string }> };

export type CategoryGetByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CategoryGetByNameQuery = { category?: { id: string, category_name: string, variations: Array<{ id: string, name: string, variation_options: Array<{ id: string, value: string }> }> } | null };

export type CollectionGetByNameQueryVariables = Exact<{
  collectionName: Scalars['String']['input'];
}>;


export type CollectionGetByNameQuery = { collection?: { id: string, name: string } | null };

export type CollectionsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string }> };

export type ProductGetByCollectionIdQueryVariables = Exact<{
  collectionId: Scalars['ID']['input'];
}>;


export type ProductGetByCollectionIdQuery = { productsFromCollection?: Array<{ id: string, name: string, description: string, product_image: string, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }>, category: { id: string, category_name: string } }> | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string, variations: Array<{ id: string, name: string }> }, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }> } | null };

export type ProductGetByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;


export type ProductGetByCategoryIdQuery = { productsFromCategory?: Array<{ id: string, name: string, description: string, product_image: string, category: { category_name: string }, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }> }> | null };

export type ProductsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ProductsByNameQuery = { productsByName?: Array<{ id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string }, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }> }> | null };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string }, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }> }> };

export type ShoppingCartAddItemMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  productItemId: Scalars['String']['input'];
  qty?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ShoppingCartAddItemMutation = { addItemToCart?: { id: string } | null };

export type ShoppingCartCreateMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ShoppingCartCreateMutation = { createShoppingCart?: { id: string } | null };

export type ShoppingCartDecrementItemQtyMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  shoppingCartItemId: Scalars['String']['input'];
}>;


export type ShoppingCartDecrementItemQtyMutation = { reduceItemQtyInCart?: { id: string } | null };

export type ShoppingCartGetByIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type ShoppingCartGetByIdQuery = { shoppingCartGetByCartId?: { id: string, shopping_cart_item: Array<{ id: string, cart_id: string, product_item_id: string, qty: number, product_item: { id: string, product_id: string, SKU: string, qty_in_stock: number, price: number, product_images: Array<string> } }> } | null };

export type ShoppingCartIncrementItemQtyMutationVariables = Exact<{
  shoppingCartItemId: Scalars['String']['input'];
  qty?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ShoppingCartIncrementItemQtyMutation = { incrementItemQtyInCart?: { id: string } | null };

export type ShoppingCartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  shoppingCartItemId: Scalars['String']['input'];
}>;


export type ShoppingCartRemoveItemMutation = { removeItemFromCart?: { id: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList($skip: Int, $take: Int) {
  categories(skip: $skip, take: $take) {
    id
    category_name
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoryGetByNameDocument = new TypedDocumentString(`
    query CategoryGetByName($name: String!) {
  category(name: $name) {
    id
    category_name
    variations {
      id
      name
      variation_options {
        id
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetByNameQuery, CategoryGetByNameQueryVariables>;
export const CollectionGetByNameDocument = new TypedDocumentString(`
    query CollectionGetByName($collectionName: String!) {
  collection(collectionName: $collectionName) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CollectionGetByNameQuery, CollectionGetByNameQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList($skip: Int, $take: Int) {
  collections(skip: $skip, take: $take) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetByCollectionIdDocument = new TypedDocumentString(`
    query ProductGetByCollectionId($collectionId: ID!) {
  productsFromCollection(collectionId: $collectionId) {
    id
    name
    description
    product_image
    product_items {
      id
      price
      SKU
      qty_in_stock
      product_images
      product_configurations {
        variation_option {
          id
          value
        }
      }
    }
    category {
      id
      category_name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByCollectionIdQuery, ProductGetByCollectionIdQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    id
    name
    description
    product_image
    category {
      id
      category_name
      variations {
        id
        name
      }
    }
    product_items {
      id
      price
      SKU
      qty_in_stock
      product_images
      product_configurations {
        variation_option {
          id
          value
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetByCategoryIdDocument = new TypedDocumentString(`
    query ProductGetByCategoryId($categoryId: ID!) {
  productsFromCategory(categoryId: $categoryId) {
    id
    name
    description
    product_image
    category {
      category_name
    }
    product_items {
      id
      price
      SKU
      qty_in_stock
      product_images
      product_configurations {
        variation_option {
          id
          value
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByCategoryIdQuery, ProductGetByCategoryIdQueryVariables>;
export const ProductsByNameDocument = new TypedDocumentString(`
    query ProductsByName($name: String!) {
  productsByName(name: $name) {
    id
    name
    description
    product_image
    category {
      id
      category_name
    }
    product_items {
      id
      price
      SKU
      qty_in_stock
      product_images
      product_configurations {
        variation_option {
          id
          value
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsByNameQuery, ProductsByNameQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int) {
  products(skip: $skip, take: $take) {
    id
    name
    description
    product_image
    category {
      id
      category_name
    }
    product_items {
      id
      price
      SKU
      qty_in_stock
      product_images
      product_configurations {
        variation_option {
          id
          value
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ShoppingCartAddItemDocument = new TypedDocumentString(`
    mutation ShoppingCartAddItem($cartId: String!, $productItemId: String!, $qty: Int) {
  addItemToCart(cartId: $cartId, productItemId: $productItemId, qty: $qty) {
    id
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartAddItemMutation, ShoppingCartAddItemMutationVariables>;
export const ShoppingCartCreateDocument = new TypedDocumentString(`
    mutation ShoppingCartCreate($userId: String!) {
  createShoppingCart(userId: $userId) {
    id
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartCreateMutation, ShoppingCartCreateMutationVariables>;
export const ShoppingCartDecrementItemQtyDocument = new TypedDocumentString(`
    mutation ShoppingCartDecrementItemQty($cartId: String!, $shoppingCartItemId: String!) {
  reduceItemQtyInCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {
    id
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartDecrementItemQtyMutation, ShoppingCartDecrementItemQtyMutationVariables>;
export const ShoppingCartGetByIdDocument = new TypedDocumentString(`
    query ShoppingCartGetById($cartId: ID!) {
  shoppingCartGetByCartId(cartId: $cartId) {
    id
    shopping_cart_item {
      id
      cart_id
      product_item_id
      product_item {
        id
        product_id
        SKU
        qty_in_stock
        price
        product_images
      }
      qty
    }
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartGetByIdQuery, ShoppingCartGetByIdQueryVariables>;
export const ShoppingCartIncrementItemQtyDocument = new TypedDocumentString(`
    mutation ShoppingCartIncrementItemQty($shoppingCartItemId: String!, $qty: Int) {
  incrementItemQtyInCart(shoppingCartItemId: $shoppingCartItemId, qty: $qty) {
    id
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartIncrementItemQtyMutation, ShoppingCartIncrementItemQtyMutationVariables>;
export const ShoppingCartRemoveItemDocument = new TypedDocumentString(`
    mutation ShoppingCartRemoveItem($cartId: String!, $shoppingCartItemId: String!) {
  removeItemFromCart(cartId: $cartId, shoppingCartItemId: $shoppingCartItemId) {
    id
  }
}
    `) as unknown as TypedDocumentString<ShoppingCartRemoveItemMutation, ShoppingCartRemoveItemMutationVariables>;