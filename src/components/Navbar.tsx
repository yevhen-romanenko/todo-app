import * as React from 'react';
import { NavbarProps } from 'src/interfaces';
import { NavLink } from 'react-router-dom'


export const Navbar: React.FunctionComponent<NavbarProps> = (todos) => {
    
    const counter: number = todos.todos.filter(task => task.completed === false).length;
    //console.log(counter);

    if (counter ===0) {
        return (
            <nav>
                <div className="nav-wrapper cyan darken-1 paddingx1">
                <span className="hide-on-med-and-down flow-text left"> All task completed </span>
                <NavLink to="/" className="brand-logo center">React TODO app</NavLink>
                </div>
            </nav>

        ) 
    }    
    return (
    <nav>
        <div className="nav-wrapper cyan darken-1 paddingx1">
            <span className="hide-on-med-and-down flow-text left"> Uncompleted tasks: {counter}</span>
            <a href="/" className="brand-logo center">React TODO app</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">TODO list</NavLink></li>
                <li><NavLink to="/about">Additional Info</NavLink></li>                
            </ul>
        </div>
    </nav>
    )
}