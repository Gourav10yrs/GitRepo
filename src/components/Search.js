import React, {Component} from 'react';
import axios from 'axios';
import Repo from './Repo'

class Search extends Component {
    state = {
        qdata : [ ],
        query : '',
        count : 0,
        loading : true,
        errorMsg : false
    };

    componentDidMount () {
        axios.get('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
        .then(res =>{
          this.setState({
            qdata: res.data.items,
            count: res.data.total_count,
            loading : false})
        })
    }

        
    handelSubmit = (e) =>{
        e.preventDefault();
        axios.get(`https://api.github.com/search/repositories?q=${this.state.query}`)
        .then(res =>{
          this.setState({
              qdata: res.data.items,
              count: res.data.total_count,
              loading : false
          })
        })
        .catch( (error) => {
            console.log(error)
            this.setState({errorMsg : true})
          }) 
    }

    handelChange = (e) => {
        this.setState ({
            query : e.target.value
        })
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handelSubmit}>
                <div className="input-group m-3 col-sm-6">
                        <input className="form-control" type="text" placeholder="Search Github Repository" onChange={this.handelChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </div>
                </div>
            </form>

            <Repo allData={this.state} />

            </div>   
        );
    }
}

export default Search