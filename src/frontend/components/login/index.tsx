import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import WrapperBox from '../ui/wrapper-box'
import StyledButton from '../ui/styled-button'
import PropertyInEdit from '../ui/property-in-edit'

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    background: ${({ theme }): string => theme.colors.superDarkBck};
    font-size: ${({ theme }): string => theme.fonts.base};
  }

  a {
    color: ${({ theme }): string => theme.colors.primary};
  }
`

const FlexWrapper = styled.section`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

const LoginBox = styled.section`
  width: 414px;
  & ${StyledButton} {
    margin: ${({ theme }): string => theme.sizes.paddingLayout} 0;
  }

  & .content {
    text-align: center;
    border-bottom: 1px solid ${({ theme }): string => theme.colors.border};
    margin: ${({ theme }): string => `0 -${theme.sizes.paddingLayout} ${theme.sizes.paddingLayout}`};
    padding-bottom: ${({ theme }): string => theme.sizes.paddingLayout};
  }
`

type Props = {
  message?: string;
  action: string;
}

const Login: React.FC<Props> = (props) => {
  const { action, message } = props
  const email = { name: 'email', label: 'Email' }
  const password = { name: 'password', label: 'Senha' }

  return (
    <React.Fragment>
      <GlobalStyle />
      <FlexWrapper>
        <LoginBox>
          <WrapperBox border>
            <div className="content">
              <h1 style={{ marginTop: 25, marginBottom: 25 }}>Bem Vindo!</h1>
              <p>Por favor, faça o login para acessar o painel</p>
            </div>
            {message && <div className="notification is-danger">{message}</div>}
            <form action={action} method="POST" style={{ marginBottom: 30 }}>
              <PropertyInEdit property={email}>
                <input type="text" name="email" id="email" placeholder="Email" className="input" />
              </PropertyInEdit>
              <PropertyInEdit property={password}>
                <input type="password" name="password" id="password" placeholder="Senha" className="input" />
              </PropertyInEdit>
              <StyledButton type="submit" className="is-primary is-fullwidth" style={{ marginTop: 40 }}>
                Login
              </StyledButton>
            </form>
          </WrapperBox>
        </LoginBox>
      </FlexWrapper>
    </React.Fragment>
  )
}

export default Login
