import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
const LineChart = (props) => {
    const defaultAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = defaultAmount
    let [janTwo, febTwo, marTwo, aprTwo, mayTwo, junTwo, julTwo, augTwo, sepTwo, octTwo, novTwo, decTwo] = defaultAmount
    props.expenses.forEach((expense, index, array) => {
        const check = moment(expense.date)
        const month = check.month() + 1
        const year = check.year()
        if (year === 2020) {
            switch (month) {
                case (1):
                    jan = jan + parseInt(expense.amount)
                    break
                case (2):
                    feb = feb + parseInt(expense.amount)
                    break
                case (3):
                    mar = mar + parseInt(expense.amount)
                    break
                case (4):
                    apr = apr + parseInt(expense.amount)
                    break
                case (5):
                    may = may + parseInt(expense.amount)
                    break
                case (6):
                    jun = jun + parseInt(expense.amount)
                    break
                case (7):
                    jul = jul + parseInt(expense.amount)
                    break
                case (8):
                    aug = aug + parseInt(expense.amount)
                    break
                case (9):
                    sep = sep + parseInt(expense.amount)
                    break
                case (10):
                    oct = oct + parseInt(expense.amount)
                    break
                case (11):
                    nov = nov + parseInt(expense.amount)
                    break
                case (12):
                    dec = dec + parseInt(expense.amount)
                    break
            }
        }else if (year === 2021){
            switch (month) {
                case (1):
                    janTwo = janTwo + parseInt(expense.amount)
                    break
                case (2):
                    febTwo = febTwo + parseInt(expense.amount)
                    break
                case (3):
                    marTwo = marTwo + parseInt(expense.amount)
                    break
                case (4):
                    aprTwo = aprTwo + parseInt(expense.amount)
                    break
                case (5):
                    mayTwo = mayTwo + parseInt(expense.amount)
                    break
                case (6):
                    junTwo = junTwo + parseInt(expense.amount)
                    break
                case (7):
                    julTwo = julTwo + parseInt(expense.amount)
                    break
                case (8):
                    augTwo = augTwo + parseInt(expense.amount)
                    break
                case (9):
                    sepTwo = sepTwo + parseInt(expense.amount)
                    break
                case (10):
                    octTwo = octTwo + parseInt(expense.amount)
                    break
                case (11):
                    novTwo = novTwo + parseInt(expense.amount)
                    break
                case (12):
                    decTwo = decTwo + parseInt(expense.amount)
                    break
            }
        }
    })
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Expenses in 2020 (€)',
                data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
                borderColor: ['rgba(255,206,86,0.2'],
                backgroundColor: ['rgba(255,206,86,0.2'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)'
            },
            {
                label: 'Expenses in 2021 (€)',
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
            text: 'Graphical showcase of expenses'
        }
    }
    return <Line data={data} options={options} />
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(LineChart)
