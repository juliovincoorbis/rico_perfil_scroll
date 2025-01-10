import { Stack } from "expo-router";
import { View, Text } from "react-native";
import HeaderScrollView from "./HeaderScrollView";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { useFonts } from "expo-font";
const DATA = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 10},
  {id: 10},
  {id: 10},
  {id: 10},
];
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'MSOF': require('../assets/fonts/filled_outlined_24_400.ttf'),
    'MSO': require('../assets/fonts/outlined_24_400.ttf'),
    'MSOFB': require('../assets/fonts/filled_outlined_24_700.ttf'),
    'MSOB': require('../assets/fonts/outlined_24_700.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View>
      <HeaderScrollView HeaderContent={(
        <Image
          source={{
            uri: "https://www.rico.guide/wp-content/uploads/2024/11/guias__0001_antojitos-maiz.jpg",
          }}
          style={{
            width:"100%",
            height:"100%",
          }}
        />
      )}>
      {DATA.map((val,key) => {
          return (
            <View style={styles.card} key={key}>
              <Text style={styles.subtitle}>({val.id})</Text>
            </View>
          );
        })}
      </HeaderScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: '#E6DDC4',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});

