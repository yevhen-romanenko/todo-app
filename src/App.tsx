import * as React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';


const App: React.FunctionComponent = () => {

    const [todos, setTodos] = React.useState<ITodo[]>([]);

    React.useEffect(() => {
        const savedStorage = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(savedStorage);
    }, []);
    
    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodoHandler = (title: string) => {
        
        //console.log('Add new Todo', title);

        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setTodos(prev => [newTodo, ...prev]);
    }

    const completeTodoHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const canRemove = window.confirm('Are u sure want to delete this todo item?')
        if (canRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
        
    }

    const updateHandler = (id: number) => {}


    return (
    <>
        <Navbar />
        <div className="container">
            <TodoForm onAdd={addTodoHandler} />  

            <TodoList 
                todos={todos}
                onComplete={completeTodoHandler}
                onRemove={removeHandler}
            />        
        </div>
    </>
    )
}

export default App;