import configureStore from 'redux-mock-store';
import { createProduct } from '../src/Redux/Action/index';
import { productResponse, productReducerData } from '../src/Constant/ProductData';
import thunk from 'redux-thunk';

describe('add product redux', () => {
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const reduxStore = mockStore();

    beforeEach(() => {
        reduxStore.clearActions();
    });

    describe('add product action', () => {
        it('should dispatch the add product action', () => {
            const expectedActions = [
                {
                    payload: productResponse,
                    type: 'CREATE_PRODUCT',
                },
            ];
            reduxStore.dispatch(createProduct(productReducerData));

            expect(reduxStore.getActions()).toEqual(expectedActions);
        });
    });
});