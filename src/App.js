import './App.scss';
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div className="app-container">
      {/* Header */}
      <div className='header-container'>
        <Header />
      </div>

      {/* Main */}
      <div className='main-content'>
        {/* Nav bar */}
        <div className='sidenav-container'>

        </div>

        {/* Content */}
        <div className='app-content'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
