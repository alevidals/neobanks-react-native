import { StyleSheet, View } from 'react-native'
import { BellIcon, ChartBarIcon, UserIcon } from 'react-native-heroicons/solid'

const Bar = () => {
  return (
    <View style={styles.bar}>
      <ChartBarIcon height={20} width={20} color='#fff' fill='white' />
      <BellIcon
        height={20}
        width={20}
        color='#fff'
        fill='rgba(231, 241, 255, 0.53)'
      />
      <UserIcon
        height={20}
        width={20}
        color='#fff'
        fill='rgba(231, 241, 255, 0.53)'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#2D14C4',
    flexDirection: 'row',
    padding: 15,
    paddingVertical: 20,
    borderRadius: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 40,
    alignSelf: 'center',
    // justifyContent: 'center'
    // flex: 1,
    // marginTop: 100,
  },
})

export default Bar
