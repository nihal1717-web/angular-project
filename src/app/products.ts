export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone6s',
    price: 799,
    description: 'A phone which is handy and comfortable'
  },
  {
    id: 2,
    name: 'IPhone X',
    price: 699,
    description: 'A great phone with one of the best cameras and large screen'
  },
  {
    id: 3,
    name: 'IPhone Mini',
    price: 299,
    description: 'A best phone with A5 chip Quad Processor'
  }
];
