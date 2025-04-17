import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/layout/Header';
import "../src/styles/main.css"

// import AdminPage from './components/layout/AdminPage';
import ImageCards from './components/layout/ImageCards';



function App() {
  return (
    <div >
      
      <ImageCards/>
     {/* <AdminPage/> */}
     <Header/>
   
    </div>
  );
}

export default App;
