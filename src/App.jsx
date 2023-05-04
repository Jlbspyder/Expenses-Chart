import { useState } from 'react'
import Header from './components/Header'
import Chart from './components/Chart'
import { UserData } from './Data'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend } from "chart.js/auto"
ChartJS.register (
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.day),
    datasets: [{
      data:  UserData.map((item) => item.amount),
      backgroundColor: ["hsl(10, 79%, 65%)", 
      "hsl(10, 79%, 65%)", 
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)",
      "hsl(10, 79%, 65%)" ],
      borderRadius: 5,
      hoverBackgroundColor: "hsl(186, 34%, 60%)"
    }],
  })

  return (
    <>
      <Header />
      <Chart chartData={userData} />
    </>
  )
}

export default App
