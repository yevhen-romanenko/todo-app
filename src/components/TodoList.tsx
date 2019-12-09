import * as React from 'react';
import { ITodo } from 'src/interfaces';

interface TodoListProps {
    todos: ITodo[]
    onComplete(id: number) : void
    onRemove(id: number) : void
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({todos, onComplete, onRemove}) => {
    if (todos.length===0) {
        return <p className="center">There is no task here</p>
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
                            <i className="material-icons red-text">edit</i>
                            <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}            
        </ul>

    )
}