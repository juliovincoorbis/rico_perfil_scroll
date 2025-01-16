import { Stack } from "expo-router";
import { View, Text } from "react-native";
import HeaderScrollView from "./HeaderScrollView";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { useFonts } from "expo-font";
import ReviewsContainer from "./ReviewsContainer";
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



const reviews =  [
  {
      "id_friend": 162,
      "restaurant_id": 711,
      "url_friend_image": "https://www.rico.guide/wp-content/uploads/2024/05/04-mary-gaby-colab-2.jpg",
      "name_colaborador": "Mary Gaby Hubard",
      "review": "Es una de las mejores vistas en la ciudad, así que es ideal para llevar a amigos que visitan de fuera. Para comer, yo me quedo con las entradas.  "
  },
  {
      "id_friend": 493,
      "restaurant_id": 711,
      "url_friend_image": "https://www.rico.guide/wp-content/uploads/2024/07/11-amigo-colab.jpg",
      "name_colaborador": "Anna Condax",
      "review": "Un lugar de date romántico, el espacio es impresionante, con vistas de película al Ángel. Para pedir, los espárragos grillados con su sabayón de curcuma, los dumplings de ricotta y espuma de parmesano, el burger de wagyu ¡y muchos Primo Aperitivo viendo el atardecer!"
  },
  {
      "id_friend": 500,
      "restaurant_id": 711,
      "url_friend_image": "https://www.rico.guide/wp-content/uploads/2024/07/09-nat-colab.jpg",
      "name_colaborador": "Nathalie Baaklini",
      "review": "Para el atardecer sí o sí. Hay que quedarse para tomar un drink después en la barra.  "
  }
];


export default function RootLayout(){
  return(
    <View>
      <ReviewsContainer list={reviews}/>
    </View>
  )
}

/*
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
*/


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

