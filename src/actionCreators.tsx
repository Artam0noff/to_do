import {TodoItem, ActionType, ActionValue, Action} from './interfaces';

export function AddTodoAction(task:TodoItem) {


        const addAction:Action = { type: 'todos/add', value: task};
        return addAction;
}

export function deleteTodoAction(index:number){
    const deleteAction: Action = { type: 'todos/delete' , value: index};
    return deleteAction;
}

export function changeStatusAction(index:number){
    const changeStatusAction: Action = { type: 'todos/changeStatus', value: index};
    return changeStatusAction;
}