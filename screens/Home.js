import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Products from '../components/Products';
const product = [
    {
        name: 'Official Nirvana Logo/Smiley Cap (Black) ',
        price: 999.99 + "$"
    },
    {
        name: 'Camo Fang Backpack Jungle',
        price: 39.99+"$"
    },
    {
        name: 'Parka and Quilted Liner Jacket',
        price: 49.99+"$"
    },
    {
        name: 'Cotton Parka Cap',
        price: 79.99+"$"
    },
    {
        name: 'Quilted Black Cap',
        price: 12.99+"$"
    },
    {
        name: 'Fang Black Cap',
        price: 199.99+"$"
    },
    {
        name: 'Cotton Black Cap',
        price: 129.99+"$"
    },
];

function HomeScreen({ navigation }) {
    return (
        <ScrollView
            style={{
                flexGrow: 0,
                width: "100%",
                height: "100%",
            }}>
            {
                product.map((product, index) => {
                    return (
                        <View style={styles.row} key={index}>
                            <View style={styles.col}>
                                <Products navigation={navigation} product={product} />
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
});

export default HomeScreen