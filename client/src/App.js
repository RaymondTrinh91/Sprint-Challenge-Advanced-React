import React, {useState, useEffect, Component} from 'react';

import axios from 'axios'
import PlayerCard from './Components/PlayerCard'
import './App.css';
import useAxios from './Hooks/useAxios'


function App() {
  const pullUrl = "http://localhost:5000/api/players"
  const [playerData] = useAxios(pullUrl)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='cardContain'>

      {playerData.map(person => (
        <PlayerCard key={person.id} name={person.name} country={person.country} searches={person.searches}/>
        ))}
        </div>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       data: [],
//     }
//   }

//   componentDidMount() {
//     this.axiosCancelSource = axios.CancelToken.source()
//     axios
//       .get('http://localhost:5000/api/players', { cancelToken: this.axiosCancelSource.token })
//       .then(res=> {
//         this.setState({data:res.data})
//       })
//       .catch(err=> {
//         console.error(err)
//       })
//   }

//   componentWillUnmount() {
//     this.axiosCancelSource.cancel('Component unmounted.')
//   }
//   render(){
//     return(
//       <div className='App'>
//         {this.state.data.map(person => (
//         <PlayerCard key={person.id} name={person.name} country={person.country} searches={person.searches}/>
//       ))}
//       </div>
//     )
//   }
// }

// export default App