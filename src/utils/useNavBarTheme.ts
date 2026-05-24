import SystemNavigationBar from 'react-native-system-navigation-bar';

export const useNavBarTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    SystemNavigationBar.setNavigationColor('#000000', 'light');
  } else {
    SystemNavigationBar.setNavigationColor('#ffffff', 'dark');
  }
};
