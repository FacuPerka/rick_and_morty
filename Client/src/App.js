import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '3f4a26d9f533.74295ca283c16689466e';

const email = 'facu@gmail.com';
const password = 'contraseña123!';

function App() {
   const navigate = useNavigate();
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);


   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
          navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
    }, [access, navigate])
    

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
       

   const onClose = (id) => {
      const updatedCharacters = characters.filter((character) => character.id !== Number(id));
      setCharacters(updatedCharacters);
    };    

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} />} />
            <Route path="/detail/:id" element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}


export default App;

//API KEY: 3f4a26d9f533.74295ca283c16689466e