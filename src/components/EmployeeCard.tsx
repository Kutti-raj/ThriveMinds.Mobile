import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../styles/colors';
import { Employee } from '../types/navigation.types';
import SmartImage from './SmartImage';

type Props = {
  employee: Employee;
  onPress: () => void;
};

const fallbackImage = require('../assets/unknown.png');

const EmployeeCard = ({ employee, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`View details of ${employee.name}`}
    >
      <SmartImage
        uri={employee.profile_image}
        fallback={fallbackImage}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {employee.name}
        </Text>

        <Text style={styles.designation} numberOfLines={1}>
          {employee.designation}
        </Text>

        <View style={styles.departmentContainer}>
          <Text style={styles.department} numberOfLines={1}>
            {employee.department}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(EmployeeCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 14,
    alignItems: 'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)',
  },

  image: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: colors.lightGray,
  },

  content: {
    marginLeft: 14,
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  designation: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 4,
  },

  departmentContainer: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  department: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
});
