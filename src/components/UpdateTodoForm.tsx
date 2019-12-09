import * as React from 'react';

const placeholderText: string = "Update todo";

interface TodoFormProps {
    onAdd(title: string) : void
}

export const UpdateForm: React.SFC<TodoFormProps> = (props) => {

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
        <form>
            <React.Fragment>
                <div className="input-field margintop2"></div>
                <input onChange={changeHandler} 
                value={title} 
                type="text" 
                id="title" 
                placeholder={placeholderText}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                {placeholderText}
            </label>
            </React.Fragment>
        </form>
    )
}