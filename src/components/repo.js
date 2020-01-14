import React, { Component } from 'react'
import axios from 'axios'

class Repo extends Component {

    state = {
        qdata : [ ],
        query : '',
        count : 0,
        loading : true,
        errorMsg : false
    }

    componentDidMount () {
      axios.get('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
      .then(res =>{
        this.setState({
          qdata: res.data.items,
          count: res.data.total_count,
          loading : false})
      })
      }

      handelSubmit =(e) =>{
        e.preventDefault();
        axios.get(`https://api.github.com/search/repositories?q=${this.state.query}`)
        .then(res =>{
          this.setState({qdata: res.data.items,
            count: res.data.total_count,
            loading : false
          })
          console.log(this.state.count)
        })
       
        .catch( (error) => {
          console.log(error)
          this.setState({errorMsg : true})
        })
          
      }
      
      handelChange = (e) => {
        this.setState({
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
            <div className="row">
              {
                this.state.errorMsg && <div class="alert alert-danger" role="alert"><p>Please Try After Some Time.</p></div> 
              }
            </div>
            <div className="row">              
                 {
                  (this.state.loading) ? (<p className="loading-msg">Loading....</p>) : (
                 (this.state.count) ? ( 
                 this.state.qdata.map( (repodata) => 
                    <div className="col-sm-6" key={repodata.id}>
                      <div className="card repo-box">
                        <div className="card-body repo-body">
                          <div className="repo-img">
                            <img alt="Repository owner profile" src={repodata.owner.avatar_url}/>
                          </div>
                          <div className="_39y6g">
                            <a target="_blank" href={repodata.html_url}>{repodata.full_name}</a>  
                            <h4 className="repo-title">{repodata.name}</h4>
                            <p className="repo-about">{repodata.description}</p>
                            <p className="card-text info-short"><svg className="star" aria-label="star" viewBox="0 0 14 16" fill="#776f6f" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                            {repodata.stargazers_count} 
                            </p>
                          </div>
                        </div>
                       </div>
                    </div> 
                    ) 
                 ) : (<p className="loading-msg"> No Result Found...</p>)
                 )
                }
            </div>
          </div>
        );
    }
}

export default Repo