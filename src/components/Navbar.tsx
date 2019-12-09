import * as React from 'react';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper cyan darken-1 paddingx1">
            <a href="/" className="brand-logo right">React TODO app</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">TODO list</a></li>
                <li><a href="/">Info</a></li>                
            </ul>
        </div>
    </nav>
)