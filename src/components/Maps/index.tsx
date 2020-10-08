import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { MapContext } from '../../contexts/MapContext'

export function Maps () {
    const mapContext = React.useContext(MapContext);
    const region = {
      latitude: mapContext.lat,
      longitude: mapContext.lng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }
    return <MapView region={region} style={styles.view} />
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})
