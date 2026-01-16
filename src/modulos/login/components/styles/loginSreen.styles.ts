import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

{
  /* LEFT SIDE */
}
export const LoginContainerLeft = styled.div`
  background-color: #fff;
  width: 50%;
  height: 100vh;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: auto;
  padding-right: auto;

  @media (max-width: 853px) {
    width: 100%;
  }

  @media (max-width: 390px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const BoxLogin = styled.div`
  width: 384px;

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleLogin = styled.h1`
  font-family: serif;
  font-size: 1.875rem;
  font-weight: bold;
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  color: transparent;
  margin-bottom: 2rem;
`;

export const SubtitleLogin = styled.p`
  font-family: serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #09090b;
  margin-bottom: 1rem;
`;

export const DescriptionLogin = styled.p`
  font-family: sans-serif;
  color: #71717a;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const LoginFooter = styled.p`
  font-family: sans-serif;
  color: #71717a;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;

{
  /* RIGHT SIDE */
}
export const LoginContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  transition: all 0.5s ease;

  @media (min-width: 1024px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f5;
    padding: 3rem;
  }

  @media (max-width: 853px) {
    width: 0;
    opacity: 0;
    overflow: hidden;
  }
`;

export const BigLogo = styled.h1`
  font-family: serif;
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  color: transparent;
  margin-bottom: 2rem;
`;

export const BrandingTitle = styled.h2`
  font-family: serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: #09090b;
  margin-bottom: 1rem;
`;

export const BrandingSubtitle = styled.p`
  font-family: sans-serif;
  color: #71717a;
  line-height: 1.6;
  text-align: center;
  width: 60%;
`;
