import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import './App.css';

import MainPage from './components/MainPage';
import SideBar from './components/SideBar';
import AddNewGroupCard from './components/AddNewGroupCard';
import Notes from './components/Notes';

// import store from './store';
// import { Provider } from 'react-redux';
// import Notes from './components/Notes';

function App() {
  const [show, setShow] = useState(false);
  // const [sidebarShow, setSidebarShow] = useState(true);
  const idx = useSelector(store => store.index)
  // console.log(idx)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 600px)'
  })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const styles = {
    disabled: {
      opacity: '0.4'
    },
    enabled: {
      cursor: 'default',
      opacity: '1'
    }
  }; 

  return (
    <div >
      <div>
        {isDesktopOrLaptop && <div className="App" style={show ? styles.disabled : styles.enabled} 
        onClick={()=> setShow(false)} >
          <SideBar show={show} setShow={setShow} />
          <MainPage />
        </div>}
        {isTabletOrMobile && <div className="App" style={show ? styles.disabled : styles.enabled} 
        onClick={()=> setShow(false)} >
          {idx < 0 ? <SideBar show={show} setShow={setShow} /> : <Notes index={idx} />}
          
        </div>}
        {show && <AddNewGroupCard setShow={setShow} />}
      </div>
    </div>
  );
}

export default App;
