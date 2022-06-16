export interface stateTypes {
    list: {text: string,isSpecial: boolean,isDone: boolean,isEditActive: boolean,date: Date | string}[];
 }

export interface actionType {
    type: string;
    payload?: any;
  }

export interface taskType {
    text: string;
    isSpecial: boolean;
    isDone: boolean;
    isEditActive: false;
    date: Date | string;
}
 
export interface newObjType {
    index: number;
    text: string;
  }

export interface serverTask {
    userId?: number;
    id?: number;
    title: string;
    completed?: boolean;
  }