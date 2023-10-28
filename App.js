import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Sample gradebook data with bonusPoints property
const initialGradebook = [
  { studentName: 'Anitha', grade: 'A', absences: 4, bonusPoints: 0 },
  { studentName: 'Swapna', grade: 'B', absences: 2, bonusPoints: 0 },
  { studentName: 'Radha', grade: 'A', absences: 3, bonusPoints: 0 },
  { studentName: 'Harshini', grade: 'B', absences: 1, bonusPoints: 0 },
  { studentName: 'Divya', grade: 'A', absences: 3, bonusPoints: 0 },
  { studentName: 'John', grade: 'B', absences: 2, bonusPoints: 0 },
  { studentName: 'Alice', grade: 'C', absences: 5, bonusPoints: 0 },
  { studentName: 'Michael', grade: 'A', absences: 0, bonusPoints: 0 },
  { studentName: 'Emma', grade: 'B', absences: 2, bonusPoints: 0 },
  { studentName: 'Daniel', grade: 'C', absences: 4, bonusPoints: 0 },
  { studentName: 'Olivia', grade: 'A', absences: 1, bonusPoints: 0 },
  { studentName: 'Liam', grade: 'B', absences: 3, bonusPoints: 0 },
];


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={TitleScreen} options={{ title: 'Course Page' }} />
        <Stack.Screen name="Gradebook" component={GradebookScreen} options={{ title: 'Gradebook' }} />
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} options={{ title: 'Student Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TitleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Computer Science</Text>
      </View>
      <View style={styles.navigationDescription}>
        <Text style={styles.navigationText}>
          To view the Gradebook, press the button below.
        </Text>
      </View>
      <View style={styles.navigateButton}>
  <TouchableOpacity
    style={styles.button} // Add a style for the button
    onPress={() => navigation.navigate('Gradebook')}
  >
    <Text style={styles.buttonText}>Navigate to Gradebook</Text>
  </TouchableOpacity>
</View>

      <StatusBar style="auto" />
    </View>
  );
}

function GradebookScreen({ navigation }) {
  const [gradebook, setGradebook] = React.useState(initialGradebook);

  const handleAwardBonusPoint = (studentIndex) => {
    const updatedGradebook = [...gradebook];
    updatedGradebook[studentIndex].bonusPoints += 1;
    setGradebook(updatedGradebook);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={gradebook}
        keyExtractor={(item) => item.studentName}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('StudentProfile', { student: item })}>
             <View style={styles.studentEntry}>
            <View style={styles.studentReq}>
              {/* Left Section for Image/Icon (placeholder) */}
              <Text style={styles.studentName}>{item.studentName}</Text>
              <View style={styles.studentImage}></View>
            </View>
            {/* Right Section for Student Information */}
            <View style={styles.studentInfo}>
              <Text style={styles.grade}>Grade: {item.grade}</Text>
               <View style={styles.gradeBorder} />
              <View style={styles.studentDetails}>
                <View style={styles.infoBox}>
                  <Text style={styles.absences}>Absences: {item.absences}</Text>
                </View>
                <View style={styles.verticalBorder}></View>
                <View style={styles.infoBox}>
                  <Text style={styles.bonusPoints}>Bonus Points: {item.bonusPoints}</Text>
                
              <Text
                style={styles.awardButton}
                onPress={() => handleAwardBonusPoint(index)}
              >
                Add Bonus
              </Text>
            </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

/// Define Student Profile screen here (as extra credit)
function StudentProfileScreen({ route, navigation }) {
  const { student } = route.params;

  return (
    <View style={styles.studentProfileContainer}>
    <View style={styles.studentProfileTitleBar}>
      <Text style={styles.studentProfileTitleText}>Student's Profile</Text>
    </View>
      <View style={styles.studentProfileInfo}>
      <Text style={styles.profileText}>Name: {student.studentName}</Text>
<Text style={styles.profileText}>Grade: {student.grade}</Text>
<Text style={styles.profileText}>Absences: {student.absences}</Text>
<Text style={styles.profileText}>Bonus Points: {student.bonusPoints}</Text>

    
      </View>
   
      <Text
        style={styles.awardButton}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    borderWidth: 2,
    borderColor: 'black',
  },
  titleText: {
    fontSize: 24,
  },
  studentName: {
    fontSize: 16,
    textAlign: 'center',
  },
  studentEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: 'black',
    backgroundColor: 'cyan',
    padding: 10,
  },
  studentReq: {
    flexDirection: 'column',
  },
  studentImage: {
    width: 100,
    height: 100,
    backgroundColor: 'pink', // Placeholder color
  },
  studentInfo: {
    width: '70%',
    margin: 10,
  },
  grade: {
    fontSize: 20,
    textAlign: 'center',
  },
  gradeBorder: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  studentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    flexDirection: 'column',
  },
  absences: {
    textAlign: 'center',
    fontSize: 18,
  },
  bonusPoints: {
    textAlign: 'center',
    fontSize: 18,
  },
  verticalBorder: {
    width: 1,
    backgroundColor: 'black',
    
  },
  awardButton: {
    width: 80, // Reduce the width of the button
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    padding: 5, // Reduce the padding of the button
    marginTop: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'green', // Background color for the button
    padding: 5, // Reduce padding to make the button shorter
    borderRadius: 5, // Add rounded corners
    align: 'center', // Center-align the button within its container
    
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  navigateButton:{
    alignItems: 'center', 
    marginTop: 10,
    },
  navigationDescription: {
      marginTop:5
    },
    studentProfileContainer: {
      flex: 1,
    },
    studentProfileTitleBar: {
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20%',
      borderWidth: 2,
      borderColor: 'black',
    },
    studentProfileTitleText: {
      fontSize: 24,
    },
   
    profileText: {
      fontSize: 20, 
    },

});