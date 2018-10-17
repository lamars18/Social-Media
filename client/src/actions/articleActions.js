import {
    GET_ARTICLES,
    DELETE_ARTICLE,
    ADD_ARTICLE,
    GET_ARTICLE,
    UPDATE_ARTICLE
  } from './types';
  import axios from 'axios';
  
  export const getArticles = () => async dispatch => {
    const res = await axios.get('/api/articles');
    dispatch({
      type: GET_ARTICLES,
      payload: res.data
    });
  };
  
  export const getArticle = id => async dispatch => {
    const res = await axios.get(
      `/api/articles/${id}`
    );
    dispatch({
      type: GET_ARTICLE,
      payload: res.data
    });
  };
  
  export const deleteArticle = id => async dispatch => {
    try {
      await axios.delete(`/api/articles/${id}`);
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    }
  };
  
  export const addArticle = article => async dispatch => {
    const res = await axios.post(
      '/api/articles',
      article
    );
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data
    });
  };
  
  export const updateArticle = article => async dispatch => {
    const res = await axios.put(
      `/api/articles/${article.id}`,
      article
    );
    dispatch({
      type: UPDATE_ARTICLE,
      payload: res.data
    });
  };
  