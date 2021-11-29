import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // State object that holds the todos once they are fetched from the api
  state = {
    posts: []
  }
  // Life cycle method: Executed when the component is mounted to the DOM, fetches the json api
  componentDidMount() {
    fetch('https://freshwebstg.wpengine.com/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }
  // JSX using Bootstrap 
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
           <h1>My Posts</h1>
           {this.state.posts.map((posts) => (
                <div className="card">
                   <div className="card-body">
                       <h5 className="card-title">{posts.title.rendered}</h5>
                       <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }} ></div>
                   </div>
                </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
