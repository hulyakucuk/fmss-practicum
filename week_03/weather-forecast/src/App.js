import './App.css';
import ContextProvider from './context/Context';
import InputValue from './components/InputValue';
import WeeklyWeather from './components/WeeklyWeather';
function App() {
  return (
    <div className='container'>
      <ContextProvider>
        <InputValue />
        <WeeklyWeather />
      </ContextProvider>
    </div>
  );
}

export default App;
