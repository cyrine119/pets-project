import { EDIT_PET, GET_PET, GET_PET_FAIL,GET_PET_LOAD,GET_PET_SUCCESS } from "../constant/pet"
import axios from "axios"

export const getPets=()=>async(dispatch)=>{
    dispatch({type:GET_PET_LOAD})
    try {
        let result = await axios.get(`/api/pet`)
        dispatch({type:GET_PET_SUCCESS,payload: result.data.response})
    } catch (error) {
        dispatch({type:GET_PET_FAIL})
        console.log(error)
    }
}

export const deletePet = (id)=>(dispatch)=>{
    axios
    .delete(`/api/pet/${id}`)
    .then((res=>dispatch(getPets())))
    .catch((err)=>console.log(err))
}
export const getPet = (id)=>(dispatch)=>{
    axios.get(`/api/pet/${id}`)
    .then((res)=>dispatch({type:GET_PET,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

//edit pet
export const editPet = (id,user)=>(dispatch)=>{
    axios.put(`/api/pet/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_PET,payload:res.data.msg})
    })
    .then(dispatch(getPets()))
    .catch((err)=>console.log(err))
}
//post pet
export const postPet = (user)=>async(dispatch)=>{
    try {
        await axios.post(`/api/pet/post`,user)
        dispatch(getPets())
    } catch (error) {
        console.log(error.response)
    }
}
