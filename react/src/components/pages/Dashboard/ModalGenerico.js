import React from 'react'
import styled from 'styled-components'

const ModalGenerico = ({title, estado, setEstado, children}) => {
  return (
    <>
    {estado &&
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <h3>{title}</h3>
          </ModalHeader>
  
          <CloseButton onClick={() => setEstado(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </CloseButton>
  
          {children}
  
        </ModalContainer>
      </Overlay>
    }

    </>
  )
}

export default ModalGenerico

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 500px;
  min-heigh: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
  padding: 20px;
  margin-top: 130px;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-weight: bolder;
    font-size: 24px;
    color: black
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    color: black;
  }

  &:hover {
    background: #F2F2F2;

  }

`