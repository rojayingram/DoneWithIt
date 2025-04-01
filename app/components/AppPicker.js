import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles'
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({icon, items, placeholder, }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>    
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.medium} style={styles.icon}/>}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    {icon && <MaterialCommunityIcons name={"chevron-down"} size={30} color={defaultStyles.colors.medium}/>}
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                        <FlatList
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            renderItem={({ item }) => 
                            <PickerItem label={item.label}
                                onPress={() => console.log(item)}/>
                            }/>
                    </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 7,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: defaultStyles.colors.light,
    },

    icon: {
        marginRight: 10
    },

    text: {
        flex: 1,
    },
})

export default AppPicker;