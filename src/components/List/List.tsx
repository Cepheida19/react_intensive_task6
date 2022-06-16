import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./List.module.css";
import isSpecialIMG from "./../../icons/isSpecial.png";
import isDoneIMG from "./../../icons/isDone.png";
import { useState } from "react";
import Menu from "./Menu/Menu";
import { deleteFromSpecialAction } from "../../store/actions/actions";
import { deleteFromDoneAction } from "../../store/actions/actions";
import { deleteFromEditAction } from "../../store/actions/actions";
import { addEditTextAction } from "../../store/actions/actions";
import { fetchTask } from "../../asyncActions/task";

const List: React.FC = () => {

    interface stateTypes {
         list: {text: string,isSpecial: boolean,isDone: boolean,isEditActive: boolean,date: Date | string}[];
      }
    const dispatch = useDispatch();
    const list = useSelector((state: stateTypes) => state.list);

    const [filterDone, setFilterDone] = useState<boolean>(false);
    const [filterInWork, setFilterInWork] = useState<boolean>(false);
    const [filterSpecials, setFilterSpecials] = useState<boolean>(false);

    interface listType {
        [index: number]: {
            text: string
            isSpecial: boolean
            isDone: boolean
            isEditActive: boolean
            date: Date | string
        }
        map?: any
    }

    const listSpecials: listType = list.filter(task => task.isSpecial === true && task.text !== "" &&
        task.isDone === false); 
    const listDone: listType = list.filter(task => task.isDone === true && task.text !== "");  
    const listNotDone: listType = list.filter(task => task.isDone === false && task.text !== ""); 

    const [newText, setNewText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewText(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>, index: number) => {
        if(e.keyCode === 13){
            const newObj = {
                index: index,
                text: newText
            }
            dispatch(addEditTextAction(newObj));
            dispatch(deleteFromEditAction(index));
            setNewText("");
        }
    }

    const fromSpecials = (index: number) => {
        dispatch(deleteFromSpecialAction(index));
    }

    const fromDone = (index: number) => {
        dispatch(deleteFromDoneAction(index));
    }

    const filterDoneActive = () => {
        if(!filterDone){
            setFilterDone(true);
            setFilterInWork(false);
            setFilterSpecials(false);
        } else {
            setFilterDone(false);
        }
    }

    const filterInWorkActive = () => {
        if(!filterInWork){
            setFilterInWork(true);
            setFilterDone(false);
            setFilterSpecials(false);
        } else {
            setFilterInWork(false);
        }
    }

    const filterSpecialsActive = () => {
        if(!filterSpecials){
            setFilterSpecials(true);
            setFilterDone(false);
            setFilterInWork(false);
        } else {
            setFilterSpecials(false);
        }
    }

    interface taskType {
        text: string;
        isSpecial: boolean;
        isDone: boolean;
        isEditActive: boolean;
        date: Date | string;
    }

    return (
        <div>
            <div className={style.taskFromBase}>
                <button onClick={() => dispatch(fetchTask())}>добавить задачу из базы</button>
            </div>
            <div className={style.wrap}>
            <div className={style.filters}>
                    <button className={(filterDone) ? style.active_filter : style.usual_filter} 
                        onClick={filterDoneActive}>Выполненные</button>
                    <button className={(filterInWork) ? style.active_filter : style.usual_filter}
                        onClick={filterInWorkActive}>В работе</button>
                    <button className={(filterSpecials) ? style.active_filter : style.usual_filter}
                        onClick={filterSpecialsActive}>Избранные</button>
                </div>

                {(filterDone) ? listDone.map((task: taskType) => 
                <div className={style.listItem}>
                    <div className={style.main_text}>
                    <img src={isDoneIMG}/>{task.text}{(task.isSpecial) ? <img src={isSpecialIMG}/> : <span></span>}
                    </div>
                </div>) : <div></div>}

                {(filterInWork) ? listNotDone.map((task: taskType) => 
                <div className={style.listItem}>
                    <div className={style.main_text}>
                    {task.text}{(task.isSpecial) ? <img src={isSpecialIMG}/> : <span></span>}
                    </div>
                </div>) : <div></div>}

                {(filterSpecials) ? listSpecials.map((task: taskType) => 
                <div className={style.listItem}>
                    <div className={style.main_text}>
                    {task.text}<img src={isSpecialIMG}/>
                    </div>
                </div>) : <div></div>}

                {(!filterDone && !filterInWork && !filterSpecials) ? 
                list.map((task, index) => <div className={style.listItem}>
                    {(!!task.isSpecial === !!true && task.text !== "") ? <span onClick={() => fromSpecials(index)}
                    ><img src={isSpecialIMG}/></span> : <span></span>}

                    {(task.isEditActive === false || task.text === "") ? <div className={style.main_text}>{task.text}</div> : 
                        <textarea autoFocus={true} onKeyDown={(e) => handleKeyPress(e, index)} value={(newText === "") ? task.text :
                         newText} onChange={handleChange}></textarea>}

                    {(!!task.isDone === !!true && task.text !== "") ? <span onClick={() => fromDone(index)}
                    ><img src={isDoneIMG}/></span> : <span></span>}

                    {(task.text === "") ? <div></div> : <span><Menu index={index}/></span>}
                    </div>)
                    : <span></span>}
            </div>
        </div>
    )
}
export default List;