import React from "react";
import style from "./Modal.module.css";
import {useDispatch} from "react-redux";
import { deleteTaskAction } from "../../../../store/actions/actions";

const Modal: React.FC<{index: number, active: boolean, text: string, date: any,
             setActive(setModalActive: boolean): void }> = (props) => {

    const dispatch = useDispatch();
    const deletePosition = (index: number) => {
            dispatch(deleteTaskAction(index));
        }
    return (
        <div className={props.active ? style.modal_active : style.modal}>
            <div className={style.modal_content} onClick={e => e.stopPropagation()}>
                <button className={style.close_button} onClick={() => {props.setActive(false)}} type="button">X</button>
                <div>Вы действительно хотите удалить задачу?</div>
                <div className={style.taskText}>{props.text}</div>
                <div>дата создания: {props.date}</div>
                <div>
                    <button className={style.main_buttons} onClick={() => {props.setActive(false)}}>Отмена</button>
                    <button className={style.main_buttons} onClick={() => deletePosition(props.index)}>Да, удалить</button>
                </div>
        </div>
    </div>
    )
}
export default Modal;