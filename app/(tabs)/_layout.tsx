// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable, useColorScheme } from 'react-native';

// import Colors from '../../constants/Colors';

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? 'light'].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }


// ----------------------------------------------------------------


// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function MyScreen() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Greating</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// ----------------------------------------------------------------

// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

// export default function MyScreen() {
//   const showMessage = () => {
//     Alert.alert('Hello World!');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={showMessage}>
//         <Text style={styles.buttonText}>Greating</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// ----------------------------------------------------------------

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function MyScreen() {
//   const [messageVisible, setMessageVisible] = useState(false);

//   const showMessage = () => {
//     setMessageVisible(true);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={showMessage}>
//         <Text style={styles.buttonText}>Greating</Text>
//       </TouchableOpacity>
//       {messageVisible && (
//         <Text style={styles.messageText}>Hello World!</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   messageText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
// });


// ----------------------------------------------------------------

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function MyScreen() {
//   const [messageVisible, setMessageVisible] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState('white');

//   const showMessage = () => {
//     setMessageVisible(true);
//     setBackgroundColor('lightgreen'); // Cambiar el color de fondo a verde claro
//   };

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <TouchableOpacity style={styles.button} onPress={showMessage}>
//         <Text style={styles.buttonText}>Greating</Text>
//       </TouchableOpacity>
//       {messageVisible && (
//         <Text style={styles.messageText}>Hello! This is a greeting message.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   messageText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
// });


// ----------------------------------------------------------------

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function MyScreen() {
//   const [messageVisible, setMessageVisible] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState('white');

//   const showMessage = () => {
//     setMessageVisible(true);
//     setBackgroundColor('lightgreen'); // Cambiar el color de fondo a verde claro
//   };

//   const resetMessage = () => {
//     setMessageVisible(false);
//     setBackgroundColor('blue'); // Restaurar el color de fondo a azul
//   };

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <TouchableOpacity style={styles.button} onPress={showMessage}>
//         <Text style={styles.buttonText}>Greating</Text>
//       </TouchableOpacity>
//       {messageVisible && (
//         <View>
//           <Text style={styles.messageText}>Hello! This is a greeting message.</Text>
//           <TouchableOpacity style={styles.defaultButton} onPress={resetMessage}>
//             <Text style={styles.defaultButtonText}>Default</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   messageText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
//   defaultButton: {
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   defaultButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// ----------------------------------------------------------------

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyScreen() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [showGreatingButton, setShowGreatingButton] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('lightgreen');

  const showMessage = () => {
    setMessageVisible(true);
    setBackgroundColor('lightgreen');
    setShowGreatingButton(false); // Ocultar el botón "Greating"
  };

  const resetMessage = () => {
    setMessageVisible(false);
    setBackgroundColor('lightblue');
    setShowGreatingButton(true); // Mostrar el botón "Greating" nuevamente
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {showGreatingButton && ( // Mostrar el botón solo si showGreatingButton es true
        <TouchableOpacity style={styles.button} onPress={showMessage}>
          <Text style={styles.buttonText}>Greating</Text>
        </TouchableOpacity>
      )}
      {messageVisible && (
        <View>
          <Text style={styles.messageText}>Hello World!</Text>
          <TouchableOpacity style={styles.defaultButton} onPress={resetMessage}>
            <Text style={styles.defaultButtonText}>Default</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  messageText: {
    marginTop: 10,
    fontSize: 16,
  },
  defaultButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  defaultButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
