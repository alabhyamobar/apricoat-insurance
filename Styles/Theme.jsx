// styles/Theme.js
export const theme = {
  colors: {
    background: '#0a0a0a',
    text: '#ffffff',
    primary: '#ffffff',
    secondary: '#777',
    border: '#444',
    success: '#4caf50',
    error: '#f44336',
    socialBg: '#222',
    socialHover: '#333'
  },
  fonts: {
    main: "'Arial', sans-serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  }
};

// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 20px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;

// styles/ContactFormStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 40px 20px;
`;

export const FormSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  
  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  min-height: 160px;
  resize: vertical;
  
  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ddd;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const Text = styled.div`
  font-size: 16px;
  
  p:first-child {
    margin-bottom: 4px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

export const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.socialBg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.socialHover};
  }
`;

export const StatusMessage = styled.div`
  margin-top: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => 
    props.type === 'success' 
      ? 'rgba(46, 125, 50, 0.2)' 
      : 'rgba(211, 47, 47, 0.2)'
  };
  color: ${props => 
    props.type === 'success' 
      ? props.theme.colors.success 
      : props.theme.colors.error
  };
`;