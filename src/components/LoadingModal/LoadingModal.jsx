import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay } from 'react-native-elements';
import { styles } from './LoadingModal.style';

export function LoadingModal(props) {

    const { showLoading, text } = props;

    return (
        <Overlay isVisible={showLoading} overlayStyle={styles.overlay} >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#70a680" />
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}



LoadingModal.propTypes = {
    showLoading: false,
    text: ''
}