import Header from './components/Header';
import './components/style.css';
import ContextProvider from './components/Context';
function App() {
  return (
    <>
    <ContextProvider>
    <Header />
    </ContextProvider>
    </>
  );
}

export default App;
