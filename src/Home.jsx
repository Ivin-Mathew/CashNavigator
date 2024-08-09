import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <>
    <View>
        <Text style={styles.text1}>
            Component Home
        </Text>
    </View>
    <View>
        <Text>Something</Text>
    </View>
    </>
    
  )
}

export default Home

const styles = StyleSheet.create({
    text1:{
        fontSize:32,
        fontWeight:'400'
    },
    /* table:{

    } */
})