import './Chart.css'
import Items from '../../Interfaces/Items'
import ChartBar from './ChartBar'

function Chart(props: Props) {
  const dataPointVal = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMax = Math.max(...dataPointVal)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: DataPoints) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        )
      })}
    </div>
  )
}

export default Chart

interface Props {
  dataPoints: DataPoints[]
}

interface DataPoints {
  label: string
  value: number
}
