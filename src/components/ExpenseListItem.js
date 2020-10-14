import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import 'numeral/locales/fr';

numeral.locale('fr');

const ExpenseListItem = ({ id, description, amount, date }) => {
    return (
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
            <p>{moment(date).format('MMMM Do, YYYY')}</p>
            <h3>{numeral(amount).format('$0,0.00')}</h3>
        </Link>
    )
}

export { ExpenseListItem as default }