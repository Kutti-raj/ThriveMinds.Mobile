import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import SmartImage from '../components/SmartImage';
import colors from '../styles/colors';
import { RootStackParamList } from '../types/navigation.types';
import useBackHandler from '../utils/useBackHandler';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeDetail'>;

const fallbackImage = require('../assets/unknown.png');

const EmployeeDetailScreen = ({ route, navigation }: Props) => {
  const { employee } = route.params;

  useBackHandler(() => {
    navigation.goBack();
    return true;
  });

  return (
    <View style={styles.container}>
      <Header title={'Employee Details'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <SmartImage
            uri={employee.profile_image}
            fallback={fallbackImage}
            style={styles.image}
          />
          <Text style={styles.name}>{employee.name}</Text>
          <Text style={styles.designation}>{employee.designation}</Text>
          <View style={styles.departmentContainer}>
            <Text style={styles.department}>{employee.department}</Text>
          </View>
        </View>
        <DetailCard label="Email" value={employee.email} />
        <DetailCard label="Phone" value={employee.phone} />
        <DetailCard label="Address" value={employee.address} />
        <DetailCard label="Joining Date" value={employee.joining_date} />
      </ScrollView>
    </View>
  );
};

export default EmployeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 14,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },

  designation: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 6,
  },

  departmentContainer: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    marginTop: 12,
  },

  department: {
    color: colors.primary,
    fontWeight: '600',
  },
});
