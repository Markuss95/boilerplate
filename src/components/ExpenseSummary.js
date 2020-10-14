import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseSummary = () => {
    return (
        <div>
        <Link to="/create">Add expense</Link>
        </div>
    )
}

export {ExpenseSummary as default}