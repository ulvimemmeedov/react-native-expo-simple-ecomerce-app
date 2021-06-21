import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { Card, Button,Image } from 'react-native-elements';

export default function Products({ navigation , product }) {

    return (
        <Card>
            <Image style={styles.tinyLogo} source={require('../assets/138389.jpg')} />
            <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
                {product.name}
            </Text>
            <Text style={styles.price} h4>
                {product.price}
            </Text>
            <Button
                type="clear"
                title='İndi Al'
                onPress={() => navigation.navigate('Ödəniş et',{
                    name:  product.name,
                    price: product.price,
                    img:   product.img
                })} />
        </Card>
    )
}
const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    tinyLogo: {
        width: 280,
        height: 200,
      },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});
