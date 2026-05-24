import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import { RootStackParamList } from '../types/navigation.types';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );

    loopAnimation.start();

    const timer = setTimeout(() => {
      navigation.navigate('EmployeeList');
    }, 2500);

    return () => {
      loopAnimation.stop();
      clearTimeout(timer);
    };
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.jpeg')}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
});
