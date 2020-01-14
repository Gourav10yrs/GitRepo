import React, { Component } from 'react'
import Repo from './components/repo'

class App extends Component {

// handelQuary = () => {
//   var i = 0, strLength = this.state.quary.length;
//   for(i; i < strLength; i++) {
//   this.setState({fquary : this.state.quary.replace(" ", "_")})
// }
// }


  render() {
    return (
      <div>
       <Repo />
      </div>
      );
  }
}
export default App;
