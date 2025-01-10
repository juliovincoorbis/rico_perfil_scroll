import { Component } from 'react';
import {
  Animated,
  ScrollView,
  View,
  Dimensions,
  Platform
} from 'react-native';


class Header extends Component {
  constructor(props) {
    super(props);
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.min = this.props.minSize ?? ( Platform.OS == 'ios' ? 102 : 64);
    this.max = this.props.maxSize ?? Dimensions.get('window').width;
    this.offset = this.max - this.min;
    this.animatedRef = new Animated.Value(0);
    this.scrolled = 0;
    this.HeaderSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [this.max, this.min],
      extrapolate: 'clamp',
    });


    this.btnMaxBottom = this.props.actionBottom ?? -28;
    this.btnMinBottom = (this.min / 2) - 16;

    this.AnimationBtnBottom = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [this.btnMaxBottom + 24, this.btnMinBottom],
      extrapolate: 'clamp',
    });

    this.AnimationSize = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [56, 32],
      extrapolate: 'clamp',
    });


    this.AnimationRadius = this.animatedRef.interpolate({
      inputRange: [0, this.offset],
      outputRange: [24, 0],
      extrapolate: 'clamp',
    });
  }

  ActionButton = () => {
    return (
      <Animated.View style={{
        width: this.AnimationSize,
        height: this.AnimationSize,
        backgroundColor: "blue",
        position: "absolute",
        right: 24,
        bottom: this.AnimationBtnBottom
      }}>

      </Animated.View>
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
    const { ActionButton, CardRadius } = this;
    return (
      <Animated.View
        style={{
          minHeight: 16,
          height: this.HeaderSize,
          maxHeight: this.max,
          backgroundColor: "red",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {this.props?.HeaderContent ?? null}
        <CardRadius />
        <ActionButton />
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

          //dispath event if need to 
          if (typeof this.props?.scrolled === "function") {
            const percent = Math.ceil((100 / this.max) * real);
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
