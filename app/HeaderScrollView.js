import { Component } from 'react';
import {
  Animated,
  ScrollView,
  View,
  Text,
  Dimensions,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';


export default class extends Component {
  state = {
    active: false,
    isBold: false,
  }
  constructor(props) {
    super(props);
    this.min = this.props.minSize ?? (Platform.OS == 'ios' ? 102 : 64);
    this.max = this.props.maxSize ?? Dimensions.get('window').width;
    if (this.props?.defaultActive) {
      this.state.active = this.props?.defaultActive
    }
    this.offset = this.max - this.min;
    this.animatedRef = new Animated.Value(0);
    this.scrolled = 0;
    this.HeaderSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [this.max, this.min],
      extrapolate: 'clamp',
    });
    this.smallButtonSize = this.props.smallButtonSize ?? 32


    this.btnMaxBottom = this.props.actionBottom ?? -28;
    this.btnMinBottom = (this.min / 2) - 20;

    this.AnimationBtnBottom = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [this.btnMaxBottom + 24, this.btnMinBottom],
      extrapolate: 'clamp',
    });

    this.AnimationSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [56, 40],
      extrapolate: 'clamp',
    });


    this.AnimationRadius = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [24, 0],
      extrapolate: 'clamp',
    });



    this.AnimationIconSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [24, 16],
      extrapolate: 'clamp',
    });

    this.AnimationIconSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [24, 16],
      extrapolate: 'clamp',
    });

  }
  BackButton = () => {
    return(
      <TouchableWithoutFeedback
      onPress={this.props?.backCallback}
    >
      <View
       style={{
        backgroundColor: "#fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:40,
        height: 40,
        fontSize:24,
        position: "absolute",
        top: this.btnMinBottom,
        left: 24,
        borderRadius:24,
       }}
      >
        <Text style={{
          fontFamily: "MSOB",
          textAlign:"center",
        }}>
          arrow_back
        </Text>
      </View>
    </TouchableWithoutFeedback>
    )
  }

  ActionButton = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            active: !this.state.active
          })
        }}
      >
        <Animated.View
          style={{
            width: this.AnimationSize,
            height: this.AnimationSize,
            backgroundColor: this.state.active ? "#33FF00" : "#fff",
            borderRadius: 56,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
            position: "absolute",
            right: 24,
            borderWidth: 1,
            bottom: this.AnimationBtnBottom,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Animated.Text
            style={{
              fontFamily: (this.state.active ? "MSOF" : "MSO") + (!this.state.isBold ? "B" : ""),
              textAlign: "center",
              fontSize: this.AnimationIconSize,
              transform: [
                { translateY: "5%" }
              ]
            }}
          >
            favorite
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  CardRadius = () => {
    return (
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          height: this.AnimationRadius,
          borderTopEndRadius: this.AnimationRadius,
          borderTopStartRadius: this.AnimationRadius,
        }}
      />
    );
  }

  Header = () => {
    const { ActionButton, CardRadius,BackButton } = this;
    return (
      <Animated.View
        style={{
          minHeight: 16,
          height: this.HeaderSize,
          maxHeight: this.max,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {this.props?.HeaderContent ?? null}
        <CardRadius />
        <ActionButton />
        <BackButton/>
      </Animated.View>
    );
  }

  Content = () => {
    return (
      <ScrollView
        style={{
          height: "100%",
          paddingTop: this.max,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          const scrolling = Math.ceil(e.nativeEvent.contentOffset.y);
          const real = scrolling < 0 ? 0 : scrolling > this.max ? this.max : scrolling;

          //prevent repeated values
          if (real == this.scrolled) {
            return;
          }
          this.scrolled = real;
          this.animatedRef.setValue(real);
          const percent = Math.ceil((100 / this.max) * real);
          const isBold = percent < 50;
          if (isBold != this.state.isBold) {
            this.setState({
              isBold
            })
          }

          //dispath event if need to 
          if (typeof this.props?.scrolled === "function") {
            this.props.scrolled(percent, real);
          }

        }}
      >
        {this.props.children}

      </ScrollView>
    );
  }

  render() {
    const { Header, Content } = this;
    return (
      <View style={{
        position: "relative",
        height: "100%",
      }}>
        <Content />
        <Header />
      </View>
    );
  }
}
