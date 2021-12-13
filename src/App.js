import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   
<Navbar title="Text conversion"/>
<div className='container my-5' >
<TextForm heading="Enter the text"/>
</div>

   </>
  );
}

export default App;
