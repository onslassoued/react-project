import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import './css.css'
import img from './destinaion/aindrahem.png'
import DestinationCard from './DestinationCard';
import { NavLink, Route, Routes } from 'react-router-dom';
import Destination from './Destination';
import { useSelector } from 'react-redux';
import FormExample from './FormExample';
import Footer from './Footer';
import { useRef , useState , useEffect} from 'react';





function App() {


  const { list } = useSelector(state => state.placeReducer)
  const [filtredlist , setFilter] = useState(list)
  useEffect (()=> {
    setFilter(list)
  },[list])

  const search=useRef ()
  const filtrer=()=>{
    setFilter( list.filter(e=> e.title.toUpperCase().includes(search.current.value.toUpperCase())))
  }
  

  return (
    <div>
      <Navbar></Navbar>
      
      


      <Routes>
        <Route path='/' element={<>
          <section className="content_section">

            <h1 id="tunisia">TUNISIA</h1>


          </section>
          <div className='title'>
            <h3 >our gallery</h3>
            <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.</p>
          </div>
          {/* </Route> */}
          <div className='Search'>
          <input type={'search'} placeholder='enter your search ' ref={search} onChange={filtrer} ></input>
          </div>
          <div className='display'>
            {list.map((e, index) => <NavLink to={index.toString()}><DestinationCard place={e} className='gallery'></DestinationCard></NavLink>)}
          </div>
          <div class="us">
            <a name="about"></a>
            <h2>WHY CHOOSE US ?</h2>
            <div class=" content">
              <div>
                <h3>HIGHLY QUALIFIED SERVICE</h3>
                <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.</p>
              </div>
              <div class="special spec">
                <h3>BEST PRICE </h3>
                <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.</p>
              </div>
              <div class="special">
                <h3>GREAT EXPERIENCE</h3>
                <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.</p>
              </div>
            </div>
            <p class="paragraphe">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod aliquam arcu, eu lacinia
              est
              bibendum eu. Donec aliquet lacinia eros non imperdiet. Maecenas tristique leo vel aliquam
              vestibulum. Sed vitae velit in tellus efficitur malesuada ac id nulla.
            </p>
            <div className="title">
              <h3> contact us !</h3>
              <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium.</p>
            </div>
            <div className='form'>
              <FormExample></FormExample>
            </div>
            <Footer></Footer>

          </div></>}></Route>
        <Route path='/:id' element={<Destination ></Destination>}></Route>


      </Routes >
      
      

    </div>

  );
}

export default App;
