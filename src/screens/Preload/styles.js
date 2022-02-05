import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = ({children}) => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#63C2D1',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </SafeAreaView>
    );
};

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;