import React from 'react'
import { View, Text} from 'react-native'
import Padrao from '../estilo/padrao'

function parOuImpar(num){
    if(num % 2 == 0){
        return <Text style={Padrao.ex}>Par</Text>
    }else {
        return <Text style={Padrao.ex}>Ímpar</Text>
    }
}

export default props => 
    <View>
        {/* {
            props.numero % 2 == 0
              ? <Text style={Padrao.ex}>Par</Text>
              : <Text style={Padrao.ex}>Ímpar</Text>
        } */}
        {
            parOuImpar(props.numero)
        }
    </View>