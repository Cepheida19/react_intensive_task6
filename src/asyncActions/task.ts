import { addTaskFromServerAction } from "../store/actions/actions"

export const fetchTask: any = () => {

    return function(dispatch: any){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch(addTaskFromServerAction(json)))
    }
}