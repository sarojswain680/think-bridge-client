import {
    GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_SUCCESS,
    CREATE_PRODUCT, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS
} from '../Types/index';


const initialState = {
    loading: false,
    product: [],
    isCreateSuccess: false
};



export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return { ...state, loading: true };
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state, product: action.payload, loading: false
            };
        case GET_ALL_PRODUCT_FAIL:
            return { ...state, loading: true };

        case CREATE_PRODUCT:
            return { ...state, loading: true };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state, product: state.product.concat(action.payload), loading: false
            };
        case CREATE_PRODUCT_FAIL:
            return { ...state, loading: true };

        case DELETE_PRODUCT:
            return { ...state, loading: true, isCreateSuccess: false };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state, product: action.payload, loading: false, isCreateSuccess: true
            };
        case DELETE_PRODUCT_FAIL:
            return { ...state, loading: true, isCreateSuccess: false };
        default:
            return state
    }
}