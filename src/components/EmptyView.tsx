import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

type Props = {
  title: string;
};

const EmptyView = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(EmptyView);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  title: {
    fontSize: 18,
    color: colors.gray,
    fontWeight: '600',
  },
});
