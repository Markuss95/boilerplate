import React from 'react'
import Modal from 'react-modal'
import LineChart from './LineChart'

const ExpenseModal = (props) => (
    <Modal
    isOpen = {props.chartSelected}
    contentLabel= "Expense Modal"
    ariaHideApp={false}
    onRequestClose={props.handleClickClose}
    >
    <LineChart />
    <button className="button button--secondary" onClick={props.handleClickClose}>Close Graphs</button>
    </Modal>
)

export default ExpenseModal