import './App.css';
import ContextProvider from './context/Context';
import InputValue from './components/InputValue';
function App() {
  return (
    <div className='container'>
      <ContextProvider>
        <InputValue />
      </ContextProvider>
    </div>
  );
}

export default App;
