// FirebaseFetcher.js
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import db from './firebaseConfig';


export const FirebaseFetcher = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentCollectionRef = collection(db, 'students');
        const querySnapshot = await getDocs(studentCollectionRef);
        const studentData = [];
        querySnapshot.forEach((doc) => {
          studentData.push(doc.data());
        });
        onDataFetched(studentData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [onDataFetched]);

  return (
    <View>
      {/* Your JSX here */}
    </View>
  );
};

export default FirebaseFetcher;
