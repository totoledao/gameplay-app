import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { color } from "react-native-reanimated";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30,      
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footerButton: {
    alignSelf: 'center',
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
});