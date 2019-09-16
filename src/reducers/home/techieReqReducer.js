import _ from 'lodash';

export default (state={}, action) => {
    if (action.type === "POST TECHIE REQUIREMENT") {
        return {...state = {}, ..._.merge(action.payload)};
    } else {
        return state;
    }
};