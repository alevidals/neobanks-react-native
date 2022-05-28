import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  title: string
  subtitle: string
  number: number
}

const Card = ({ title, subtitle, number }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.mediumTitle, styles.center]}>{title}</Text>
      <Text style={styles.cardNumber}>{number}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
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
    width: '45%',
  },
  cardNumber: {
    fontSize: 40,
    color: '#6979F8',
    fontWeight: '600',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 12,
  },
  mediumTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  center: {
    textAlign: 'center',
  },
})

export default Card
