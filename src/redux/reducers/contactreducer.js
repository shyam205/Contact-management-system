import { ActionTypes } from "../constants/action-types";

const initialState = {
    contacts : [
        {
            id:1,
            firstname:"John",
            lastname:"Doe",
            status:0
        },
        {
            id:2,
            firstname:"Levan",
            lastname:"Karlo",
            status:1
        }
    ]
}

const contactReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.DELETE_CONTACT:
            return { 
                contacts : state.contacts.filter(item => item.id != payload)
            }
        case ActionTypes.EDIT_CONTACT:
            const filterContact = state.contacts.filter((item,index) => item.id != payload.id) 
            const filterIndex = state.contacts.findIndex((item,index) => item.id === payload.id) 
            //console.log("filterIndex ",filterIndex)
            state.contacts.splice(filterIndex,1,payload)
            return {
               // contacts : [...filterContact,payload]
               contacts : state.contacts
            }
        case ActionTypes.SAVE_CONTACT:
            //console.log("payload ",payload)
            return{
                contacts : [...state.contacts, payload]
            }
        default: 
        return state
    }

}



export default contactReducer;