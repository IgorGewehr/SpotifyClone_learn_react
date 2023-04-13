import React, { useState } from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const InputTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  border: 2px solid #d2d2d2;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; // centraliza horizontalmente
`;

const Button = styled.button`
  background-color: #1db954;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
`;

const MessageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  width: 35vw; // nova propriedade adicionada
`;



const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const Sacar = ({ saldo, saqueRealizado }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageSaldo, setMessageSaldo] = useState(0);
  const handleFinalizarSaque = () => {
    setMessageSaldo(saldo);
    setShowMessage(true);
    saqueRealizado();
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <PageTitle>SAQUE PIX</PageTitle>
      <InputWrapper>
        <InputTitle>Digite sua chave Pix CPF</InputTitle>
        <InputField type="text" placeholder="000.000.000-00" />
      </InputWrapper>
      <ButtonWrapper>
        <div style={{ position: 'relative' }}>
          <Button onClick={handleFinalizarSaque}>SACAR</Button>
          {showMessage && (
            <MessageContainer>
              <span>Saque de R${messageSaldo} realizado com sucesso!</span>
              <CloseButton onClick={handleCloseMessage}>X</CloseButton>
            </MessageContainer>
          )}
        </div>
      </ButtonWrapper>
    </div>
  );
};

export default Sacar;
