import React from 'react';
import { 
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />

      <Image
        source={IllustrationImg}      
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente!
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games favoritos {`\n`}
          com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />

      </View>
      
    </View>
  );
}