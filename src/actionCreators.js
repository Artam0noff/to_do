
export function AddTodoAction(text) {
    const trimmedText = text.trim();

    const taskItem = {
        task: trimmedText,
        isDone: false,
    };

    if(trimmedText.length > 0)
    {
        return { type: 'todos/add', value: taskItem};
    } else {
        return ;
    }
}

export function deleteTodoAction(index){
    return { type: 'todos/delete' , value: index};
}

export function changeStatusAction(index){
    return { type: 'todos/changeStatus', value: index};
}