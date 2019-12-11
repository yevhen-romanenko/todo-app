import * as React from 'react';

import { TodoListProps } from 'src/interfaces';
import { UpdateForm } from './UpdateForm';


export const TodoList: React.FunctionComponent<TodoListProps> = ({todos, onComplete, onRemove, onUpdate}) => {
    if (todos.length===0) {
        return <p className="center">There is no task here</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();  // for fix problem with click on todoitem delete/decline and have still not completed task 

        onRemove(id)
    }

    const editHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();

        onUpdate(id)
    }


    return (
        <ul>
            { todos.map( todo => {
                const classItem = ['todo'];
                if (todo.completed) {
                    classItem.push('completed');
                }
                return (
                    <li className={classItem.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={onComplete.bind(null, todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={event=>editHandler(event, todo.id)}>edit</i>
                            <i className="material-icons red-text" onClick={event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}            
        </ul>

    )
}