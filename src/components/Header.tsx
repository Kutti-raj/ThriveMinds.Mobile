import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

const Header = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default React.memo(Header);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    paddingBottom: 16,
  },
});
