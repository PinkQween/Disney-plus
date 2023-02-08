import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/assets/images/cta-logo-one.svg' />
            <SingUp>
                GET ALL THREE
            </SingUp>
            <Description>
                
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src='/assets/images/cta-logo-two.png' />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(/assets/images/login-background.jpg);
        z-index: -1;
        opacity: 0.85;
    }
`

const CTA = styled.div`
    width: 80%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
`

const CTALogoOne = styled.img`

`

const CTALogoTwo = styled.img`
    padding: 0 18px;
`

const SingUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transform: all 300ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`