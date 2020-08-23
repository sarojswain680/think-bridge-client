import axios from 'axios';
import {
    GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_SUCCESS,
    CREATE_PRODUCT, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS
} from '../Types/index';
import { API_URL, END_POINT } from '../../Constant/index';

export const getAllProduct = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_PRODUCT,
        });
        const api = `${API_URL}${END_POINT.PRODUCT}/${END_POINT.ALL}`;

        axios.get(api, {})
            .then(res =>
                getProductSuccess(dispatch, res)
            ).catch(error => {
                getProductFail(dispatch, error);
            }
            );
    };
};

const getProductSuccess = (dispatch, res) => {
    console.log("ndisvnaksnfakfa", res.data)
    dispatch({
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: res.data,
    });
};
const getProductFail = (dispatch, error) => {
    dispatch({
        type: GET_ALL_PRODUCT_FAIL,
    });
};


export const createProduct = (name, description, price, photo) => {
    return dispatch => {
        dispatch({
            type: CREATE_PRODUCT,
        });
        const api = `${API_URL}${END_POINT.PRODUCT}/${END_POINT.CREATE}`;
        const body = {
            name: name,
            description: description,
            price: price,
            photo: photo
        };
        axios.post(api, body, {})
            .then(res =>
                createProductSuccess(dispatch, res)
            ).catch(error => {
                createProductFail(dispatch, error);
            }
            );
    };
};

const createProductSuccess = (dispatch, res) => {
    dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data,
    });
};
const createProductFail = (dispatch, error) => {
    dispatch({
        type: CREATE_PRODUCT_FAIL,
    });
};

export const deleteProduct = (productId) => {
    return dispatch => {
        dispatch({
            type: DELETE_PRODUCT,
        });
        const api = `${API_URL}${END_POINT.PRODUCT}/${productId}`;
        axios.post(api, {}, {})
            .then(res =>
                deleteProductSuccess(dispatch, res)
            ).catch(error => {
                deleteProductFail(dispatch, error);
            }
            );
    };
};

const deleteProductSuccess = (dispatch, res) => {
    dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: res.data,
    });
};
const deleteProductFail = (dispatch, error) => {
    dispatch({
        type: DELETE_PRODUCT_FAIL,
    });
};