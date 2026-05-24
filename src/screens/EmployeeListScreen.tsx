import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import EmployeeCard from '../components/EmployeeCard';
import EmptyView from '../components/EmptyView';
import Header from '../components/Header';
import LoadingSkeleton from '../components/LoadingSkeleton';
import SearchBar from '../components/SearchBar';

import employeesData from '../data/employees.json';
import colors from '../styles/colors';
import { Employee, RootStackParamList } from '../types/navigation.types';
import useBackExit from '../utils/useBackExit';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeList'>;

const EmployeeListScreen = ({ navigation }: Props) => {
  useBackExit();

  const [search, setSearch] = useState('');

  const [debouncedSearch] = useDebounce(search, 500);

  const searchText = debouncedSearch.trim().toLowerCase();

  const employees = employeesData as Employee[];

  const filteredEmployees = useMemo(() => {
    if (!searchText) return employees;
    return employees.filter(emp => emp.name.toLowerCase().includes(searchText));
  }, [employees, searchText]);

  const isSearching = search.length !== debouncedSearch.length;

  const renderEmployee = useCallback(
    ({ item }: { item: Employee }) => (
      <EmployeeCard
        employee={item}
        onPress={() =>
          navigation.navigate('EmployeeDetail', { employee: item })
        }
      />
    ),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Header title="Employee Directory" />

      <SearchBar value={search} onChangeText={setSearch} />

      {isSearching ? (
        <LoadingSkeleton />
      ) : (
        <FlatList
          data={filteredEmployees}
          renderItem={renderEmployee}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<EmptyView title="No Employees Found" />}
        />
      )}
    </View>
  );
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
});
