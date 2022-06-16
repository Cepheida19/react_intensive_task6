import React, { useState } from "react";
import style from "./Textarea.module.css";
import {useDispatch, useSelector} from "react-redux";
import { addTaskAction } from "../../store/actions/actions";

const Textarea: React.FC = () => {
    interface stateTypes {
        list: {text: string,isSpecial: boolean,isDone: boolean,isEditActive: boolean,date: Date | string}[];
     }
    const dispatch = useDispatch();
    const list = useSelector((state: stateTypes) => state.list);

    const [text, setText] = useState<string>("");
    const [textError, setTextError] = useState<string>("");
    const maxLength: number = 160;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        let overLength = text.length - maxLength;
        if(text.length > maxLength){
            setTextError(`Длина превышает 160 символов на ${overLength}!`);
        } else {
            setTextError("");
        }
    }
    const addTask = () => {
        interface taskType {
            text: string;
            isSpecial: boolean;
            isDone: boolean;
            isEditActive: false;
            date: Date | string;
        }
        const task: taskType = {
            text: text,
            isSpecial: false,
            isDone: false,
            isEditActive: false,
            date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
        }
        dispatch(addTaskAction(task));
        setText("");
        setTextError("");
    }
    return (
        <div>
        <div className={style.textarea}>
            <textarea value={text} onChange={handleChange} placeholder="новая задача" 
                 />
            <button onClick={addTask}>Добавить задачу</button>
        </div>
        <div className={style.error}>{textError}</div>
        
    </div>
    )
}
export default Textarea;