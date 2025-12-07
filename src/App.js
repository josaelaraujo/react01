import logo from './logo.svg';
import './App.css';
import frase from './frase';

function App() {
  const name = 'Josael Araujo'
  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App-header">
      <h1>Fazendo meu primeiro exemplo em React</h1>
      <p>Olá, sou o {newName} e estou começando a aprender essa linguagem agora e ja vi que ela é a mistura de HTML, CSS e JS em um unico lugar usando JSX, um ambiente que posso editar HTML e JS ao mesmo tempo.</p>
      <p>Soma: {sum(1,3)}</p>
      <img src={url} alt='imagem'/>
    </div>
  );
}

export default App;
