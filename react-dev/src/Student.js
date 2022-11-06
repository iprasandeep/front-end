import React from 'react';

class Student extends React.Component {
    componentWillUnmount()
    {
        console.log("componentWillUnmount called!");
    }
    render()
    {
        return (
            <div className='App'>
                <h1>Student Component Will Unmount</h1>
               
            </div>
        )
    }
}

export default Student;