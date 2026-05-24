import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

type Props = {
  label: string;
  value: string;
};

const DetailCard = ({ label, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default React.memo(DetailCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)',
  },

  label: {
    fontSize: 13,
    color: colors.gray,
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
});
