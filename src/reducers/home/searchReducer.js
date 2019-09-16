import _ from 'lodash';

const searchReducer = (namespace) => (state={}, action) => {
    if (action.type === `${namespace}/FETCH TECHNOLOGIES`) {
        return {...state = {}, ..._.merge(action.payload)};
    } else {
        return state;
    }
};

export default searchReducer;