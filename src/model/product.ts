/**
 * Product model
 * @typedef {Object} Product
 * @property {string} id - Product id
 * @property {string} name - Product name
 * @property {string} description - Product description
 * @property {string} category - Product category
 * @property {number} price - Product price
 * @property {Object} image - Product image
 * @property {string} image.alt - Product image alt
 * @property {string} image.url - Product image url
 * @example
 * {
 *   id: '1',
 *  name: 'Product 1',
 * description: 'Product 1 description',
 * category: 'Category 1',
 * price: 100,
 * image: {
 *  alt: 'Product 1 image',
 * url: 'https://product1image.com'
 * }
 * }
 */
export type Product = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	image: {
		alt: string;
		src: string;
	};
};
