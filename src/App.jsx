import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/routes/Routes';

export default function App() {
  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}
