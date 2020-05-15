import React from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


class Loading extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  
  componentDidMount(){
    setTimeout(()=>{this.props.navigation.navigate('SignIn')},
     2000
    )
  }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.iconstyle}>
          <Icon name="shopping-bag" size={200} color="white" />
        </View>
        <View style={styles.titlestyle}>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>E-Shop</Text>
          <ProgressBarAndroid style={{ color: "white" }}></ProgressBarAndroid>

        </View>


      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  iconstyle: {
    flex: 0.8,
    justifyContent:"center"
  },
});
