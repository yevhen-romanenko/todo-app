import * as React from 'react';
import { TodoFormProps } from 'src/interfaces';

const placeholderText: string = "Enter name of todo";


export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {

    const [title, setTitle] = React.useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title);            
            setTitle('');            
        }
    }

    return (
        <div className="input-field margintop2">
            <input 
                onChange={changeHandler} 
                value={title} 
                type="text" 
                id="title" 
                placeholder={placeholderText}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                {placeholderText}
            </label>
        </div>
    )
}