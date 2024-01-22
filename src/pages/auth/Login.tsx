import Typography from '@mui/material/Typography'
import { Footer, FooterText, Image, LoginContainer, Wrapper } from './Login.styled'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
      <Wrapper>
        <Image>
          <img src='/assets/Login.svg' alt='' />
        </Image>
        <LoginContainer>
          <div>
            <Typography
              sx={{
                width: '100%',
                fontWeight: 600,
                color: 'var(--primary-color)',
                textAlign: 'left'
              }}
              variant='h2'
            >
              eFurniture
            </Typography>
          </div>
          <LoginForm />
        </LoginContainer>
        <Footer>
          <FooterText>&copy; 2024 | All Rights Reserved</FooterText>
        </Footer>
      </Wrapper>
    </>
  )
}

export default Login
