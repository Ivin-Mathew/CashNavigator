// data.jsx
import React, { useState, useEffect } from 'react';
import { firestore } from './firebaseConfig'; // Import Firestore from your configuration file

const transactions = async () => {
  try {
    const dataArray = [];
    const querySnapshot = await firestore().collection('debit').get();
    querySnapshot.forEach(documentSnapshot => {
      dataArray.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });

    dataArray.sort((a,b)=>{
        return new Date(b.dateField) - new Date(a.dateField);
    })

    return dataArray;
  } catch (error) {
    console.error("Error fetching Firestore data: ", error);
    return [];
  }
};

const transactionData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      const dataFromFirestore = await transactions();
      setData(dataFromFirestore);
    };

    fetchFirestoreData();
  }, []);

  return data;
};

export default transactionData;
