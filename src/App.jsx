import './App.css';
import Podaci from './components/Podaci.jsx';
import Profilna from './components/Profilna.jsx';
import Okvir from "./components/Okvir.jsx"
import Slider from "./components/Slider.jsx"
import Naslov from "./components/Naslov.jsx"

function App() {
  return (
    <div>
      <Profilna link="https://d112y698adiu2z.cloudfront.net/photos/production/user_photos/002/693/965/datas/profile.jpg"></Profilna>
      <Okvir>
        <Naslov tekst="Borna Goreta"></Naslov>
      <Podaci podatak="CITY" value="Split, Croatia" ></Podaci>
      <Podaci podatak="High School" value="3. gimnazija Split" ></Podaci>
      <Podaci podatak="University" value="FESB" ></Podaci>
      <Podaci podatak="IG" value="bokkyn" ></Podaci>
      <Podaci podatak="GitHub" value="https://github.com/bokkyn" ></Podaci>
      </Okvir>
      <br></br>
      <Okvir>
      <Naslov tekst="Skills"></Naslov>
      <Slider number="20%" skill="React"></Slider>
      <Slider number="80%" skill="Photo/Video"></Slider>
      <Slider number="50%" skill="Python"></Slider>
      <Slider number="75%" skill="Arduino"></Slider>
      </Okvir>
    </div>
  );
}

export default App;
