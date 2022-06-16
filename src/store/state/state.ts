import {stateTypes} from "./../types/types"; 

export const defaultState: stateTypes = {
    list: [
      {
        text: "",
        isSpecial: false,
        isDone: false,
        isEditActive: false,
        date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
    },
    ]
};