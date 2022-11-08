import './App.css';
import Test from './components/Test';
import DBConfig from './config/DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
  return (
    <div className="p-4">
      <Test />
    </div>
  );
}

export default App;
