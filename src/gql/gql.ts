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
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n      variations {\n        id\n        name\n      }\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      price\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n      variations {\n        id\n        name\n      }\n    }\n    product_items {\n      id\n      price\n      SKU\n      qty_in_stock\n      product_images\n      product_configurations {\n        variation_option {\n          id\n          value\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(skip: $skip, take: $take) {\n    id\n    name\n    description\n    product_image\n    category {\n      id\n      category_name\n    }\n    product_items {\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
