import Home from './components/Home';
import GlobalContext from './contexts';
import GlobalStyle from './styles/global';

function App() {
  return (
    <GlobalContext>
      <GlobalStyle />
      <Home />
    </GlobalContext>
  );
}

export default App;
