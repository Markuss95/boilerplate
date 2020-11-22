import React from 'react'
import Modal from 'react-modal'
 import WorkoutLineChart from './WorkoutLineChart'

const WorkoutModal = (props) => (
    <Modal
    isOpen = {props.chartSelected}
    contentLabel= "Workout Modal"
    ariaHideApp={false}
    onRequestClose={props.handleClickClose}
    >
    <WorkoutLineChart />
    <button className="button button--secondary" onClick={props.handleClickClose}>Close Graphs</button>
    </Modal>
)

export default WorkoutModal