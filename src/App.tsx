import * as React from 'react';
import { ITodo } from './interfaces';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';


const App: React.FunctionComponent = () => {
    
    const [todos, setTodos] = React.useState<ITodo[]>([]);   

    React.useEffect(() => {
        const savedStorage = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(savedStorage);
    }, []);
    
    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
    <BrowserRouter>     
            
            <Switch>
                <Route component={TodosPage} path="/" exact></Route>
                <Route component={AboutPage} path="/about"></Route>
            </Switch>            
            
    </BrowserRouter>
    )
}

export default App;