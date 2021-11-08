import { request } from '../api';

const initialState = {

};

export function productSuccess(product: any) {
  return {
    type: 'productSuccess',
    product,
  };
}

export function productFetchData() {
  return (dispatch : any) => request('product')
    .then(result => dispatch(productSuccess(result)));
}

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'productSuccess':
      return {
        ...state,
        product: action.product,
        productToRender: action.product,
      };
    default:
      return state;
  }
}
