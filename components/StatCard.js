import { StyleSheet, Text, View } from 'react-native';

export default function StatCard(props) {
    return(
        <View style={[styles.card, { backgroundColor: props.bgColor}]}> 
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        paddingLeft: 30,
        borderRadius: 300,
        marginVertical: 10,
        marginRight: 500,
        width: '100%',          
    },  
    title: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '1200', 
    },
    value: {
        fontSize: 28,
        color: '#000000',
        fontWeight: '600',  
    },              
});