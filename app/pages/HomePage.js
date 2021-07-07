/* eslint-disable prettier/prettier */
import React from 'react';
import MySwiper from '../component/Swiper'
import {
    Text,
    View,
} from '../component/Themed';
import { Dimensions,StyleSheet , Image,TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const w = windowWidth/4, h = w + 20
    let renderSwipeView = (types, n) => {
      return (
        <View style={styles.typesView}>
          {
            types.map((item, i) => {
              let render = (
                <View style={[{width: w, height: h}, styles.typesItem]}>
                  <Image source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pxcodes.com%2Fd%2Ffile%2F6d4bbc07f8b07e288b5d6549932d85d5.jpg&refer=http%3A%2F%2Fwww.pxcodes.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628215083&t=d452498e9a332e82b9b9d1bb57c584df'}} style={{width: w*.5, height: w*.5}}/>
                  <Text style={{fontSize: 12, color:"#666"}}>{item}</Text>
                </View>
              )
              return (
                <TouchableHighlight style={{width: w, height: h}} key={i} onPress={() => {}}>{render}</TouchableHighlight>

              )
            })
          }
        </View>
      )
    }

const HomeScreen = ()=> {
    return (
        <View style={{flex: 1}}>
            <View style={{ height: 240, alignItems: 'center', justifyContent: 'center' }}>
            <MySwiper></MySwiper>
            </View>
            <Swiper
            height={h*2.4}
            paginationStyle={{ bottom: 10 }}
            dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
            activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}>
            {renderSwipeView(['美食','甜品饮品','商店超市','预定早餐','果蔬生鲜','新店特惠','准时达','高铁订餐'], 0)}
            {/* {renderSwipeView(['土豪推荐','鲜花蛋糕','汉堡炸鸡','日韩料理','麻辣烫','披萨意面','川湘菜','包子粥店'], 8)} */}
            </Swiper>

        </View>
        
    );
};
const styles = StyleSheet.create({
    
    typesView: {
      paddingBottom: 10,
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "row",
      flexWrap: "wrap"
    },
    typesItem: {
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
    },
   
    
  })
  

 export default HomeScreen;