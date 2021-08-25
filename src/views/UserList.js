import React from 'react'
import {Alert, View, Text, FlatList, useColorScheme} from 'react-native'
import { Button, Icon, ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {


    const [ state ] = React.useContext(UsersContext)
 

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuario', 'Deseja Excluir usuario?',[
            {
                text :'Sim',
                onPress(){
                    console.warn('delete')
                }
            },
            {
                text :'Não'
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                      onPress = {() => props.navigation.navigate("UserForm", user)}  
                      type = "clear"           
                      icon = {<Icon name="edit" size ={25} color = "orange"/>}
                />
                 <Button
                      onPress = {() => confirmUserDeletion(user)}  
                      type = "clear"           
                      icon = {<Icon name="delete" size ={25} color = "red"/>}
                />
            </>
        )
    }

    function getUserItem( {item: user} ){
        return (
            <ListItem key={user.id} bottomDivider>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content> 
                <Text>{getActions(user)}</Text>
            </ListItem>
         )
    }

    return(
        <View>
            <FlatList
                keyExtractor = {user => user.id.toString()}
                data = {state.users}
                renderItem =  {getUserItem}
            />
        </View>
    )
}