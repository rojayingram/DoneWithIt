import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/rojay.png')
    },

    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/rojay.png')
    },
]

function MessagesScreen(props) {

    const [ messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    

    const handleDelete = message => {
        // Delete the message from message array
        const newMessages = setMessages(messages.filter(m => m.id != message.id));
        
        // Call the sever to delete from backend
    }
    return (
        <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id} // .toString is generating an error
            renderItem={({ item }) =>
            <ListItem 
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={()=>console.log("Message selected", item)}
            onLongPress={()=> handleDelete(item)}
            refresh
            />}
            ItemSeparatorComponent={<ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/rojay.png')
                    },
                ])
            }}

        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;