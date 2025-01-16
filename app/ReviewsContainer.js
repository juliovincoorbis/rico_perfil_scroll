import { View, Text, Image } from "react-native";
import { Component } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'



export default class extends Component {
    CardReview = ({ data, index, ...props }) => {
        const { id_friend, restaurant_id, url_friend_image, name_colaborador, review } = data;
        const isLeft = index % 2 == 0;
        const padding = isLeft ? { paddingLeft: 24 } : { paddingRight: 24 }
        const position = isLeft ? "flex-start" : "flex-end";
        return (
            <View
                style={{
                    paddingTop: 80,
                    position: "relative"
                }}
            >
                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: position
                }}>
                    <Image
                        style={{
                            width: 96,
                            height: 96,
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: "#000"
                        }}
                        resizeMode={ImageResizeMode.contain}
                        source={{ uri: url_friend_image }}
                    />
                </View>
                <View style={{
                    ...padding,
                }}>
                    <View style={{
                        padding: 8,
                        backgroundColor: "#fff",
                        borderWidth:1,
                        borderBlockColor:"#000",
                        position:"relative",
                    }}>
                        <View style={{
                            display: "flex",
                            justifyContent:position,
                            width:"100%",
                            position:"absolute",
                            flexDirection:"row",
                            top:0,
                            left:0,
                            paddingLeft:16,
                        }}>
                            <View
                                style={{
                                    width:12,
                                    height:12,
                                    backgroundColor:"#fff",
                                    transform: [
                                        {
                                            translateY: -6.66,
                                        },
                                        {rotate:"45deg"}
                                    ],
                                    borderTopWidth:1,
                                    borderLeftWidth:1
                                }}
                            />
                        </View>
                        <Text style={{ fontWeight: 17, fontWeight: "bold" }}>
                            {name_colaborador}
                        </Text>
                        <Text>
                            {review}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        const { CardReview } = this;
        if (!this.props?.list) {
            return null;
        }
        return (
            <View style={{
                display:"flex",
                gap: 24,
            }}>
                {this.props.list.map((item, index) => (<CardReview data={item} index={index} key={index} />))}
            </View>
        )
    }
}