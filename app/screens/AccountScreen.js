import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    },
]

function AccountScreen(props) {
    return (

        <Screen style={styles.screen}>

            <View style={styles.constainer}>
                <ListItem
                    title="Rojay Ingram"
                    subTitle="rojayingramlearns@gmail.com"
                    image={require("../assets/rojay.png")}
                />
            </View>

            <View style={styles.constainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor} />
                        }
                        />
                    }
                />
            </View>

            <ListItem 
                title="Log out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
            />
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    constainer: {
        marginVertical: 20,
    },

    screen: {
        backgroundColor: colors.light,
    },
})

export default AccountScreen;