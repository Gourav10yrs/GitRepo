import React, {Component} from 'react'
import axios from 'axios'
class Profile extends Component {

    state = {
        profiles: [ ]
      }
      componentDidMount () {
        axios.get('https://api.github.com/users/facebook')
        .then(res =>{
          this.setState({profiles: res.data})
        })
      }


render () {
return(
<div>
        {/* <h1>Profile</h1>
            <div className="card" key={this.state.profiles.id}>
            <div className="card-body">
            <img src={this.state.profiles.avatar_url} className="card_img" alt="profile pic"/>
                <h5 className="card-title"> {this.state.profiles.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.profiles.name}</h6>
                <p className="card-text">{this.state.profiles.location}</p>
            </div>
            </div> */}
    </div>
);
}
}

export default Profile