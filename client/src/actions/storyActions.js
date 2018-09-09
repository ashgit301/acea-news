import axios from 'axios';
import { GET_STORIES, POST_STORY, DELETE_STORY, STORIES_LOADING} from './types';

export const getStories = () => dispatch => {
    dispatch(setStoriesLoading()); 
    axios
        .get('/api/stories')
        .then(res => 
            dispatch({
                type: GET_STORIES, 
                payload: res.data
            })
        )
};

export const deleteStory = (id) => {
    return{
        type: DELETE_STORY, 
        payload: id
    };
};

export const postStory = (story) => dispatch => {
    axios
        .post('/api/stories', story)
        .then(res =>
            dispatch({
                type: POST_STORY, 
                payload: res.data
            })
        )
};

export const setStoriesLoading = () => {
    return{
        type: STORIES_LOADING
    };
};