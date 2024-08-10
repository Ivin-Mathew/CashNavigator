import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import tw from 'twrnc';
import transactionData from './Data';


const Row = ({item}) => {
  return (
    <View style={tw`mb-5 px-3`}>
      <Text style={tw`text-2xl font-bold`}>{item.dateField}</Text>
      <View style={tw`flex-row justify-between mx-6`}>
        <Text style={tw`text-lg`}>Rs. {item.integerField}</Text>
        <Text style={tw`text-lg`}>{item.textField}</Text>
      </View>
      
    </View>
  );
};

const Home = () => {
  const data = transactionData();

  return (
    <>
      <ScrollView>
        <View style={tw`flex flex-col items-center mb-16 mt-4 border-white`}>
          <Text style={tw`text-3xl text-white`}>
            Home
          </Text>
        </View>
        <View style={styles.gridContainer}>
          {data.map((item, index) => (
            <Row item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      
    </>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'column', // Stack rows vertically
    flexWrap: 'nowrap', // No wrapping within rows
  },
  rowContainer: {
    flexDirection: 'row', // Arrange items in a row
    flexWrap: 'nowrap', // No wrapping within the row
  },
  gridItem: {
    flex: 1, // Each item takes up equal space
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 10,
  },
});
