import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { 
  View,
  Text,
  Alert,    
} from 'react-native';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';

export function Profile() {

  const{ user, signOut } = useAuth();
  
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {signOut()}
      }
    ])}

  return (
    <View style={styles.container}>

      <RectButton onPress={handleSignOut}>
        <Avatar
          urlImage={user.avatar}
        />
      </RectButton>

      <View>

        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.userName}>
            {user.firstName}
          </Text>
        </View>

          <Text style={styles.message}>
            Hoje é dia de vitória!
          </Text>

      </View>  

    </View>
  )}