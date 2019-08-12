import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';

const AppDescription = () => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <Text style={styles.title}>
      El Dolar
    </Text>

    <Text style={styles.description}>
      Es una aplicacion sin costos, Open source bajo licencia MIT.
    </Text>
    <Text style={styles.description}>
      La aplicacion cuenta con una versiona Mobile disponible tanto para Android como para iOS.
    </Text>
    <Text style={styles.description}>
      Ademas cuenta con una version Web la cual puede ser consultada desde cualquier dispositivo con acceso a internet.
    </Text>
    <Text style={styles.description}>
      El motivo de dicha aplicacion es tener una fuente unica en donde consultar el precio del dolar de los principales bancos de la Argentina.
    </Text>
    <Text style={styles.description}>
      El motivo de dicha aplicacion es tener el precio de cotizacion del dolar al dia corriente.
    </Text>
    <Text style={styles.description}>
      La aplicacion actualiza el precio de cada banco cada 3hs despues de la ultima actualización.
    </Text>
    <Text style={styles.description}>
      La aplicacion actualiza el precio de cada banco cada 3hs despues de la ultima actualización.
    </Text>

    <Text style={styles.title}>
      Creditos
    </Text>

    <Text style={styles.description}>
      Eduardo Depetris
      {'\n'}
      Ezequiel Depetris
    </Text>
  </ScrollView>
)

export default AppDescription;
