import jsonAPI from '../../apis/jsonAPI';
import axios from 'axios';

export const techieRequirement = (formValues) => async disptach => {
    const response = await jsonAPI.post(`/techie_Requirement`, formValues);
    console.log(formValues);
    axios.post('http://localhost:5000/send', {...formValues, name: "Amit Kumar"}).then(res => {
      debugger
        console.log(res);
    });

    disptach({ type: "POST TECHIE REQUIREMENT", payload: response.data });
} 