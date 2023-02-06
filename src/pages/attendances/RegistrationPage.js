import { Text, View } from 'native-base'
import React from 'react'
import { AccessComponent } from '../../components/AccessComponent'

let url_Provicional='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const RegistrationPage = () => {
  return (
    <View>
        <Text>Registros de entrada</Text>
        <AccessComponent nombre='Rafael Escobar' img_path={url_Provicional} entrada='00:00' turno='Primero' /> 
    </View>
  )
}
