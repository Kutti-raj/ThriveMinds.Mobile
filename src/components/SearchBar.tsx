import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../styles/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = ({ value, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search employees..."
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default React.memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  input: {
    height: 50,
    color: colors.text,
    fontSize: 16,
  },
});
