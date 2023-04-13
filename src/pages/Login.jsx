import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ isLogged, loginRealizado }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isCadastro, setIsCadastro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginRealizado();
    }
  }, []);

  const handleClick = () => {
    const storedEmail = localStorage.getItem("email");
    const storedSenha = localStorage.getItem("senha");
    if (email === storedEmail && senha === storedSenha) {
      localStorage.setItem("token", "meu-token-de-autenticacao");
      navigate("/");
      loginRealizado();
    } else {
      alert("Email ou senha incorretos.");
    }
  };
  

  const handleCadastroClick = () => {
    setIsCadastro(true);
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    // Checa se a senha e a confirmação de senha são iguais
    if (senha === confirmarSenha) {
      // Armazena os dados no localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      localStorage.setItem("saldo", "0");
      localStorage.setItem("token", "meu-token-de-autenticacao");
      alert("Cadastro realizado com sucesso!");
      setIsCadastro(false);
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      loginRealizado();
    } else {
      alert("As senhas não coincidem.");
    }
  };
  

  const handleVoltarClick = () => {
    setIsCadastro(false);
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="m-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-500">Spotify Premium</h1>
        {isLogged ? (
          <p className="text-green-500 font-bold mb-4">Você já está logado</p>
        ) : isCadastro ? (
          <form onSubmit={handleCadastroSubmit}>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64 bg-gray-800 placeholder-gray-500 focus:bg-gray-700 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64 bg-gray-800 placeholder-gray-500 focus:bg-gray-700 focus:outline-none"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64 bg-gray-800 placeholder-gray-500 focus:bg-gray-700 focus:outline-none"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-4 font-semibold"
            >
              Cadastrar
            </button>
            <button
              type="button"
              className="text-gray-500 ml-4 underline"
              onClick={handleVoltarClick}
            >
              Voltar
            </button>
          </form>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64 bg-gray-800 placeholder-gray-500 focus:bg-gray-700 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-64 bg-gray-800 placeholder-gray-500 focus:bg-gray-700 focus:outline-none"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              className="bg-green-500 text-white rounded-md py-2 px-4 font-semibold"
              onClick={handleClick}
            >
              Entrar
            </button>
            <p className="text-gray-500 mt-4">
              Não tem uma conta?{" "}
              <button
                className="underline"
                onClick={handleCadastroClick}
              >
                Cadastre-se
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
  
  }
    
  export default Login;       
