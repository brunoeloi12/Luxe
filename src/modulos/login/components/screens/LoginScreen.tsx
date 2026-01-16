import { useState } from 'react';
import {
  GlobalStyle,
  LoginContainer,
  LoginContainerLeft,
  LoginContainerRight,
  BigLogo,
  BrandingTitle,
  BrandingSubtitle,
  BoxLogin,
  BoxTitle,
  TitleLogin,
  SubtitleLogin,
  DescriptionLogin,
  LoginForm,
  LoginFooter,
} from '../styles/loginSreen.styles';
import Button from '../../../../shered/buttons/button';
import Input from '../../../../shered/inputs/input/input';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <LoginContainerLeft>
          <BoxLogin>
            <BoxTitle>
              <TitleLogin>LUXE</TitleLogin>
              <SubtitleLogin>Bem-vindo de volta</SubtitleLogin>
              <DescriptionLogin>
                Entre na sua conta para continuar comprando produtos exclusivos.
              </DescriptionLogin>
            </BoxTitle>
            <LoginForm>
              <Input type="email" title="Email" value={email} onChange={handleEmailChange} />
              <Input
                type="password"
                title="Senha"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button texto="Entrar" type="primary" margin="1rem 0" />
            </LoginForm>
            <LoginFooter>Não tem uma conta?</LoginFooter>
            <LoginFooter>Esqueceu a senha?</LoginFooter>
          </BoxLogin>
        </LoginContainerLeft>
        <LoginContainerRight>
          <BigLogo>LUXE</BigLogo>
          <BrandingTitle>Estilo e Elegância</BrandingTitle>
          <BrandingSubtitle>
            Descubra produtos premium selecionados especialmente para você. Qualidade excepcional e
            design atemporal
          </BrandingSubtitle>
        </LoginContainerRight>
      </LoginContainer>
    </>
  );
};

export default LoginScreen;
