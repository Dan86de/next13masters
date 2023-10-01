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
  createProduct?: Maybe<Product>;
};


export type MutationCreateProductArgs = {
  createProductInput: Scalars['String']['input'];
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


export type CategoryGetByNameQuery = { category?: { id: string, category_name: string } | null };

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


export type ProductGetByCollectionIdQuery = { productsFromCollection?: Array<{ id: string, name: string, description: string, product_image: string, product_items: Array<{ price: number }>, category: { id: string, category_name: string } }> | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string, variations: Array<{ id: string, name: string }> }, product_items: Array<{ id: string, price: number, SKU: string, qty_in_stock: number, product_images: Array<string>, product_configurations?: Array<{ variation_option: { id: string, value: string } }> | null }> } | null };

export type ProductGetByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;


export type ProductGetByCategoryIdQuery = { productsFromCategory?: Array<{ id: string, name: string, description: string, product_image: string, category: { category_name: string }, product_items: Array<{ price: number }> }> | null };

export type ProductsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ProductsByNameQuery = { productsByName?: Array<{ id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string }, product_items: Array<{ price: number }> }> | null };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, description: string, product_image: string, category: { id: string, category_name: string }, product_items: Array<{ price: number }> }> };

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
      price
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
      price
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
      price
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
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;