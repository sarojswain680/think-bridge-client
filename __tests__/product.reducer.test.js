import productReducer from '../src/Redux/Reducer/product';
import { productResponse } from '../src/Constant/ProductData';


describe('products reducer', () => {
    it('products  reducer expected state', () => {
        const action = {
            payload: productResponse,
            type: 'CREATE_PRODUCT',
        };

        const updatedState = productReducer(undefined, action);
        expect(updatedState.product).toHaveLength(1);
        expect(updatedState.product).toEqual([productResponse]);
    });
});