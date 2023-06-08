import { Line } from "react-chartjs-2";
import 'chart.js/auto';

export type ConfigChart = {
  responsive: boolean,
  displayTitle: boolean,
  title: string
}

export type dataChart = {
  labels: string[],
  datasets: {
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
  }[]
}

export default function ChartLine(props:{config:ConfigChart, data:dataChart}){
  const options = {
    responsive: props.config.responsive,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size:20
          }
        }
      },
      title: {
        display: props.config.displayTitle,
        text: props.config.title,
      },
    },
    scales :{
      y: {
        beginAtZero: true,
        max : 100
      }
    },
  };
  return(
    <div className="chartContainer row">
      <Line 
        data = {props.data}
        options = {options}
      />
    </div>
  );
}