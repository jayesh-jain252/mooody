import Navigation from './components/Navigation/Navigation';
import MessageForm from './components/MessageForm/MessageForm';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  "particles": {
    "number":{
      "value":30,
      "density":{
        "enable":true,
        "value_area":800
      }
    }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}
    
// let QuotesData = [{'angry':'Sometimes one middle finger isn’t enough to let someone know how you feel. That’s why you have two hands.'},
//                   {'sad':'Why does life keep teaching me lessons that i have no desire to learn.'},
//                   {'happy':"I think it is time to be happy again"},
//                   {'love':'You make me happy even in my worst moods.That is the power of your love'}];

function App() {
  return (

    <div className="App">
      <Particles className='particles'
          params={particlesOptions} />
      <Navigation />
      <MessageForm />
    </div>
  );
}

export default App;
