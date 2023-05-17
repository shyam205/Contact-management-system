import { ActionTypes } from "../constants/action-types";

export const saveContact = (contact) => {
    return{
         type:ActionTypes.SAVE_CONTACT,
         payload:contact
    }
}

export const editContact = (contact) => {
    return{
         type:ActionTypes.EDIT_CONTACT,
         payload:contact
    }
}

export const deleteContact = (contact) => {
    return{
         type:ActionTypes.DELETE_CONTACT,
         payload:contact
    }
}