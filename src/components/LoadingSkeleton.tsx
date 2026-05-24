import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';

const LoadingSkeleton = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.avatar} />
          <View style={styles.content}>
            <View style={styles.name} />
            <View style={styles.designation} />
            <View style={styles.department} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default React.memo(LoadingSkeleton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.lightGray,
  },

  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  name: {
    width: '60%',
    height: 18,
    borderRadius: 6,
    backgroundColor: colors.lightGray,
    marginBottom: 10,
  },

  designation: {
    width: '40%',
    height: 14,
    borderRadius: 6,
    backgroundColor: colors.lightGray,
    marginBottom: 10,
  },

  department: {
    width: 80,
    height: 24,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
  },
});
