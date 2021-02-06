import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Square from './Square.js'
import { connect } from 'react-redux'

const GameBoard = (props) => {
  const [timeLeft, setTimeLeft] = useState(60)


  useEffect(() => {
    if(!timeLeft) return
    const timerId = setInterval(() => {
      //happens every 1000ms
      setTimeLeft(timeLeft -1)
    },1000)
    return () => clearInterval(timerId)
  }, [timeLeft])


    return (

        <ImageBackground 
        style={styles.container}
        source={require('../assets/background.png')}
        >
        <Text style={styles.header}>Kostebekleri Yakala!</Text>
        <Text>{timeLeft} saniyen kaldi</Text>
        <Text>{props.score} tane kostebek yakalandi!</Text>
        <View style={styles.game}>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
 
          <Text style={styles.footer}>Gelistiren: Firat Goktepe</Text>
        </View>
      </ImageBackground>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#FF8033',
      marginBottom: 30,
      marginTop: 100
    },
    footer: {
      fontStyle: 'italic',
      marginTop: 50,
      marginLeft: 70
    },

  });

  const mapStateToProps = state => {
    return {
      score: state.score
    }
  }

export default connect(mapStateToProps)(GameBoard)