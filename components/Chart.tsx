import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const Chart = () => {
  return (
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width - 80}
      height={180}
      yAxisLabel='$'
      yAxisSuffix='k'
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: 'rgba(105, 121, 248, 1)',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2,
        color: (opacity = 0) => `rgba(105, 121, 248, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(153, 153, 153, 1)`,
        style: {
          borderRadius: 16,
        },
        propsForBackgroundLines: {
          strokeWidth: 0,
        },
        propsForDots: {
          r: '3',
          fill: 'rgba(105, 121, 248, 1)',
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  )
}

export default Chart
