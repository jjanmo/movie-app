import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
`
export const LogoContainer = styled.div`
  & a {
    display: block;
  }
  & img {
    transform: scale(0.6);
  }
`
export const FormContainer = styled.form`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Input = styled.input`
  width: 95%;
  padding: 0.9rem 3.6rem 0.9rem 1.4rem;

  font-size: 1.6rem;
  border: none;
  outline: none;
  border-radius: 2rem;
`

export const Button = styled.button`
  all: unset;
  position: absolute;
  right: 2.5rem;
  cursor: pointer;
`
