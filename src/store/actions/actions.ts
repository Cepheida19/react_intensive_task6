import { taskType, newObjType, serverTask} from "./../types/types";
import {ADD_TASK, DELETE_POSITION, ADD_TO_SPECIAL, DELETE_FROM_SPECIAL, ADD_TO_DONE} from "./../actionTypes/actionTypes";
import {DELETE_FROM_DONE, ADD_TO_EDIT, DELETE_FROM_EDIT, ADD_EDIT_TEXT, TASK_FROM_SERVER} from "./../actionTypes/actionTypes";

export const addTaskAction = (payload: taskType) => ({type: ADD_TASK, payload});
export const deleteTaskAction = (payload: number) => ({type: DELETE_POSITION, payload});
export const addToSpecialAction = (payload: number) => ({type: ADD_TO_SPECIAL, payload});
export const deleteFromSpecialAction = (payload: number) => ({type: DELETE_FROM_SPECIAL, payload});
export const addToDoneAction = (payload: number) => ({type: ADD_TO_DONE, payload});
export const deleteFromDoneAction = (payload: number) => ({type: DELETE_FROM_DONE, payload});
export const addToEditAction = (payload: number) => ({type: ADD_TO_EDIT, payload});
export const deleteFromEditAction = (payload: number) => ({type: DELETE_FROM_EDIT, payload});
export const addEditTextAction = (payload: newObjType) => ({type: ADD_EDIT_TEXT, payload});
export const addTaskFromServerAction = (payload: serverTask) => ({type: TASK_FROM_SERVER, payload});