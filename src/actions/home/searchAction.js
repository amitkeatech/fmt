import jsonAPI from '../../apis/jsonAPI';

// import history from '../../history';

export const searchTechnologies = (namespace, term) => async disptach => {
    
    if (term === "") {
        disptach({ type: `${namespace}/FETCH TECHNOLOGIES`, payload: {} });
    } else {
        const response = await jsonAPI.get(`/technologies?name_like=${term}`);
        disptach({ type: `${namespace}/FETCH TECHNOLOGIES`, payload: response.data });
    }
}