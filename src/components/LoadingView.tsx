import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../styles/colors';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default React.memo(LoadingView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
