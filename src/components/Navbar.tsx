import * as React from 'react';
import { ITodo } from 'src/interfaces';

//interface NavbarProps {
  //  todos: ITodo[];
//}

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper cyan darken-1 paddingx1">
            <a href="/" className="brand-logo right">React TODO app</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">TODO list</a></li>
                <li>Info</li>                
            </ul>
        </div>
    </nav>
)