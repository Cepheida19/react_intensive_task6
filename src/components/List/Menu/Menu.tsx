import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Menu.module.css";
import menuIMG from "./../../../icons/menu.png";
import Modal from "./Modal/Modal";
import { addToSpecialAction } from "../../../store/actions/actions";
import { deleteFromSpecialAction } from "../../../store/actions/actions";
import { addToDoneAction } from "../../../store/actions/actions";
import { deleteFromDoneAction } from "../../../store/actions/actions";
import { addToEditAction } from "../../../store/actions/actions";
import { deleteFromEditAction } from "../../../store/actions/actions";



const Menu: React.FC<{index: number}> = (props) => {
    interface stateTypes {
        list: {text: string,isSpecial: boolean,isDone: boolean,isEditActive: boolean,date: Date | string}[];
     }
    const dispatch = useDispatch();
    const list = useSelector((state: stateTypes) => state.list);

    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [modalActive, setModalActive] = useState<boolean>(false);

    const toSpecials = (index: number) => {
        if(list[index].isSpecial === true){
            dispatch(deleteFromSpecialAction(index));
        } else {
            dispatch(addToSpecialAction(index));
        }
    }

    const toDone = (index: number) => {
        if (list[index].isDone === true){
            dispatch(deleteFromDoneAction(index));
        } else {
            dispatch(addToDoneAction(index));
        }
    }

    const toEditActive = (index: number) => {
        if (list[index].isEditActive === true){
            dispatch(deleteFromEditAction(index));
        } else {
            dispatch(addToEditAction(index));
        }
    }

    const changeActive = () => {
        if(!modalActive){
            setModalActive(true);
        } 
    }
    return (
        <span>
            <span className={style.menu_button} onClick={() => setMenuActive(!menuActive)}><img src={menuIMG}/></span>

            <div className={!menuActive ? style.menu_active : style.menu} onClick={() => setMenuActive(false)}>
                <div className={style.menu_content} onClick={e => e.stopPropagation()}>
                <button className={style.close_button} onClick={() => setMenuActive(false)} type="button">X</button>
                    <div><button onClick={() => toSpecials(props.index)}>{(list[props.index].isSpecial === false) ? 
                    "в избранное" : "из избранного"}</button></div>

                    <div><button onClick={() => toDone(props.index)}>{(list[props.index].isDone === false) ? 
                    "выполнено" : "в работу"}</button></div>

                    <div><button onClick={() => toEditActive(props.index)}>редактировать</button></div>

                    <div><button onClick={changeActive}>удалить</button></div>
                    <div><Modal active={modalActive} setActive={setModalActive} index={props.index}
                         text={list[props.index].text} date={list[props.index].date}/></div>
                </div>
            </div>
        </span>
    )
}
export default Menu;