import {stateTypes, actionType} from "./../types/types";
import {ADD_TASK, DELETE_POSITION, ADD_TO_SPECIAL, DELETE_FROM_SPECIAL, ADD_TO_DONE} from "./../actionTypes/actionTypes";
import {DELETE_FROM_DONE, ADD_TO_EDIT, DELETE_FROM_EDIT, ADD_EDIT_TEXT, TASK_FROM_SERVER} from "./../actionTypes/actionTypes";
import {defaultState} from "./../state/state";

export const listReducer = (state = defaultState, action: actionType): stateTypes => {
    switch (action.type){
      case ADD_TASK:
        return {...state, list: [...state.list, action.payload]}; 
      case DELETE_POSITION:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, text: ""}) : ({...itemList}) )};
      case ADD_TO_SPECIAL:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isSpecial: true}) : ({...itemList}) )};
      case DELETE_FROM_SPECIAL:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isSpecial: false}) : ({...itemList}) )};
      case ADD_TO_DONE:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isDone: true}) : ({...itemList}) )};
      case DELETE_FROM_DONE:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isDone: false}) : ({...itemList}) )};
      case ADD_TO_EDIT:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isEditActive: true}) : ({...itemList}) )};
      case DELETE_FROM_EDIT:
          return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload) ? ({...itemList, isEditActive: false}) : ({...itemList}) )};
      case ADD_EDIT_TEXT:
           return {...state, list: state.list.map((itemList, index) =>
                  (index === action.payload.index) ? ({...itemList, text: action.payload.text}) : ({...itemList}) )};
      case TASK_FROM_SERVER:
            return {...state, list: state.list.map((itemList, index) =>
                   (index === 0) ? ({...itemList, text: action.payload.title}) : ({...itemList}) )};
      default:
        return state;
    }
  }
