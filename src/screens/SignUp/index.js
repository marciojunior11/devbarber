import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber';
import EmailIcon from '../../assets/email';
import LockIcon from '../../assets/lock';
import PersonIcon from '../../assets/person';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () =>{
        if (nameField != '' && emailField != '' && passwordField != '') {
            let json = await Api.SignUp(nameField, emailField, passwordField);
            console.log(json);

            if (json.token) {
                alert("DEU CERTO!");
            } else {
                alert("Erro: "+json.error);
            }
        } else {
            alert("Preencha os campos!")
        }
    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    };

    return (
        <Container>
            <BarberLogo width='100%' height='160'/>
            <InputArea>

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>J?? possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Fa??a Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}