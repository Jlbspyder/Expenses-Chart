import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend } from "chart.js/auto"
ChartJS.register (
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
  )  

const Chart = ({chartData}) => {
    const date = new Date()
    const weekday = ["sun","mon","tue","wed","thur","fri","sat"];
    let day = weekday[date.getDay()];
    const [currentDay, setCurrentDay] = useState(day)
    let sun = weekday[0]
    let mon = weekday[1]
    let tue = weekday[2]
    let wed = weekday[3]
    let thu = weekday[4]
    let fri = weekday[5]
    let sat = weekday[6]
    let dayName = chartData.labels
    let bar = chartData.datasets

    const isCurrDay = (dayName) => {
      let currDay = day === dayName;
      return currDay;
    }
    


    
    const tooltipTitle = () => {
      return ""
    }

    

    const options = {
        layout: {padding:{right:15, left: -18}},
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                backgroundColor: 'hsl(25, 47%, 15%)',
                callbacks: {
                  title: tooltipTitle
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
              grid: {
                  display: false,
              }
          },
        },
    }
    
  return (
    <div className="main-container">
      <div className="title">
        <h2>Spending - Last 7 days</h2>
      </div>
      <div className="bars" onClick={isCurrDay}>
        <Bar data={chartData} options={options} style={{cursor: "pointer"}}/>
      </div>
      <div className="border"></div>
    <div className="aside">
      <div className="total-spent">
        <h5>Total this month</h5>
        <h1>$478.33</h1>
      </div>
      <div className="percent-change">
        <h5>2.4%</h5>
        <p>from last month</p>
      </div>
    </div>
    </div>
  );
};

export default Chart;
