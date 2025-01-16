import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
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


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
