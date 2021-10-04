import { EDIT_PET, GET_PET, GET_PET_FAIL,GET_PET_LOAD,GET_PET_SUCCESS, } from "../constant/pet"

const initialState ={
    pets : [],
    loadPets: false,
    errors:{},
    user: {},
    editPet:""
}

export const petReducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case GET_PET_LOAD:
            return {...state,loadPets:true}
        case GET_PET_SUCCESS:
            return {...state,pets:payload,loadPets:false}
        case GET_PET_FAIL :
            return {...state,loadPets:false, errors:payload}
        case GET_PET :
            return{...state,user:payload}
        case EDIT_PET :
            return {...state,editPet:payload}
            
    
        default:
         return   state
    }
}