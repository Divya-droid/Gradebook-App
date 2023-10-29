// FirebaseFetcher.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import db from './firebaseConfig';

export const FirebaseFetcher = ({ onDataFetched }) => {
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.Collection('students').get();
      const studentData = data.docs.map(doc => doc.data());
      setGradebook(studentData);
      onDataFetched(studentData); // Pass the data back to the parent component
    };
    fetchData();
  }, []);

  return (
    <View>
      {/* Your JSX here */}
    </View>
  );
};
export default FirebaseFetcher;
