import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[];
    onToggle(id: number): void;
    // Second syntax
    onRemove: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }


    if(todos.length === 0) {
        return (
            <h6 className="center">Пока дел нет!</h6>
        )
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed) {
                    classes.push("completed");
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>    
    )
}
