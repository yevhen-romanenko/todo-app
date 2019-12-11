import * as React from 'react';
import * as ReactModal from 'react-modal';
import { ITodo } from 'src/interfaces';

const placeholderText: string = "Update todo";

interface UpdateFormProps {
    isOpen: boolean,
    todos: ITodo[]
}

export const UpdateForm: React.FunctionComponent<UpdateFormProps> = ({todos, isOpen}) => {

    const [title, setTitle] = React.useState<string>('');
    const modals = [];

    const openHandler = (event: React.MouseEvent , id: number) => {
        event.preventDefault();

        const modal = todos.find(todo => todo.id === id);
        console.log(modal);
        
        
    }

    return ( 
        <div>        
        <ReactModal
          isOpen={this.modalState()}
          contentLabel={placeholderText}
        >
          <button>Close Modal</button>
        </ReactModal>
      </div>
                
    )
}