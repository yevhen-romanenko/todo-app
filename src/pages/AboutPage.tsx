import * as React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
    const history = useHistory();
    return (
        <>
            <h1>Information page</h1>
            <p className="flow-text">
                You still have uncompleted tasks -> 
                Return to the tasks page and finish them
            </p>
            <button className="btn" onClick={() => history.push('/')}>Back to the TODO list</button>
        </>
    )
}