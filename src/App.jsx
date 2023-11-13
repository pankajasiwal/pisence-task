import Main from './component/Main';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <Main />
      </div>
    </div>
  );
}

export default App;
