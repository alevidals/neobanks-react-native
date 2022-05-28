import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Chart from './components/Chart'
import Card from './components/Card'
import Bar from './components/Bar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Transactions history</Text>
      <Text>These are your monthly and daily actions. 📊</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}
      >
        <Card title='Transactions' number={35} subtitle='LAST MONTH' />
        <Card title='Transactions' number={3} subtitle='TODAY' />
      </View>
      <View style={[styles.cardChart]}>
        <Text style={styles.mediumTitle}>Transactions Last Year</Text>
        <View style={styles.tabs}>
          <Text
            style={{
              color: '#6979F8',
              borderBottomWidth: 3,
              borderBottomColor: '#6979F8',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            Monthly
          </Text>
          <Text style={{ color: 'rgba(105, 121, 248, 0.5)' }}>Daily</Text>
        </View>
        <Chart />
      </View>
      <Bar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F6F9',
    minHeight: '100%',
  },
  logo: {
    width: 214,
    height: 24,
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  center: {
    textAlign: 'center',
  },
  mediumTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardChart: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
})
