import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import searchReducer from './home/searchReducer';
import techieReqReducer from './home/techieReqReducer';

export default combineReducers({
    form: formReducer,
    techieReqReducer,
    searchReducer1 : searchReducer('searchReducer1'),
    searchReducer2 : searchReducer('searchReducer2')
});