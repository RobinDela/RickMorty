import './App.css';
import RickGallery from './RickGallery.js';
import Header from './Header.js';

function App() {
  return (
    <div>
      <Header />
      <div className='Container'>
        <RickGallery />
      </div>
      ;
    </div>
  );
}

export default App;
