import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import workoutChartSelector from '../selectors/workoutsChart'
const WorkoutLineChart = (props) => {
    const defaultVolume = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = defaultVolume
    let [janTwo, febTwo, marTwo, aprTwo, mayTwo, junTwo, julTwo, augTwo, sepTwo, octTwo, novTwo, decTwo] = defaultVolume
    props.workouts.forEach((workout, index, array) => {
        const check = moment(workout.date)
        const month = check.month() + 1
        const year = check.year()
        if (year === 2020) {
            switch (month) {
                case (1):
                    jan = jan + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (2):
                    feb = feb + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (3):
                    mar = mar + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (4):
                    apr = apr + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (5):
                    may = may + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (6):
                    jun = jun + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (7):
                    jul = jul + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (8):
                    aug = aug + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (9):
                    sep = sep + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (10):
                    oct = oct + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (11):
                    nov = nov + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (12):
                    dec = dec + parseInt(workout.reps)*parseInt(workout.weight)
                    break
            }
        }else if (year === 2021){
            switch (month) {
                case (1):
                    janTwo = janTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (2):
                    febTwo = febTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (3):
                    marTwo = marTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (4):
                    aprTwo = aprTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (5):
                    mayTwo = mayTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (6):
                    junTwo = junTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (7):
                    julTwo = julTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (8):
                    augTwo = augTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (9):
                    sepTwo = sepTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (10):
                    octTwo = octTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (11):
                    novTwo = novTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
                case (12):
                    decTwo = decTwo + parseInt(workout.reps)*parseInt(workout.weight)
                    break
            }
        }
    })
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Lifts in 2020 (€)',
                data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
                borderColor: ['rgba(255,206,86,0.2'],
                backgroundColor: ['rgba(255,206,86,0.2'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)'
            },
            {
                label: 'Lifts in 2021 (€)',
                data: [janTwo, febTwo, marTwo, aprTwo, mayTwo, junTwo, julTwo, augTwo, sepTwo, octTwo, novTwo, decTwo],
                borderColor: ['rgba(54,162,235,0.2'],
                backgroundColor: ['rgba(54,162,235,0.2'],
                pointBackgroundColor: 'rgba(54,162,235,0.2)',
                pointBorderColor: 'rgba(54,162,235,0.2)'
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: `Graphical showcase of ${props.workoutsFilter.sortBy} volume`
        }
    }
    return <Line data={data} options={options} />
}

const mapStateToProps = (state) => {
    return {
        workouts: workoutChartSelector(state.workouts,state.workoutFilters),
        workoutsFilter: state.workoutFilters
    }
}
export default connect(mapStateToProps)(WorkoutLineChart)
