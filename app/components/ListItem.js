import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View, } from 'react-native';
//import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({image, IconComponent, title, subTitle, onPress, onLongPress}) {

    return (
        
        <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        onLongPress={onLongPress}
        >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },

    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },

    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    
    subTitle: {
        color: colors.medium,
    },

    title: {
        fontWeight: '500',
    },

})

export default ListItem;