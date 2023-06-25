import { Outlet } from 'react-router-dom';
import Header from './header/header';


  
  const Layout: React.FC= () => {
    return (
      <div>
        <Header />
       
        <Outlet/>
      </div>
    );
  };

export default Layout;