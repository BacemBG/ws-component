import './App.css';
import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
import PhotoProfile from './component/profile/PhotoProfile';

function App() {
  return (
    <div class='app'>
     <FullName/>
     <Adress/> 
    <PhotoProfile />
    </div>
  );
}

export default App;
