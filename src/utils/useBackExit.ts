import { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';

const useExitOnBackPress = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit Application',
        'Do you want to close the app?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: true },
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
};

export default useExitOnBackPress;
