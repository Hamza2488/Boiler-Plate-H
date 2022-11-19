import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import AppRouter from './route/router';

function App() {
  return (
<>
<AppRouter />
</>
  );
}

export default App;