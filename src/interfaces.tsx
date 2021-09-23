
export type TodoItem = { task: string , isDone: boolean};
export type ActionType = 'todos/add' | 'todos/delete' | 'todos/changeStatus' ; 
export type ActionValue = number | TodoItem;

export interface Action {
    type: ActionType;
    value: ActionValue;
}