import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput, Button } from 'react-native-paper'
import { DataStore } from '@aws-amplify/datastore'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'
import { Trip } from '../models'

const Container = styled.View`
  margin: 20px;
`

const ButtonContainer = styled.View`
  margin-top: 10px;
  width: 50%;
  align-self: flex-end;
`

type CreateTripScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateTrip'>

export function CreateTripScreen ({ navigation }: { navigation: CreateTripScreenNavigationProp }): JSX.Element {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const onCreate = async (): Promise<void> => {
    setLoading(true)
    await DataStore.save(
      new Trip({
        name
      })
    )
    setLoading(false)
    navigation.goBack()
  }

  const isDisabled = name.length === 0

  return (
    <Container>
      <TextInput label='Name' value={name} onChangeText={text => setName(text)} textAlign='left' autoFocus />
      <ButtonContainer>
        <Button mode='contained' disabled={isDisabled} loading={loading} onPress={onCreate}>Create</Button>
      </ButtonContainer>
    </Container>
  )
}
