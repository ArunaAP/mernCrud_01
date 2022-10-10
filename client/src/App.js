import React, { Component } from 'react'
import axios from 'axios';



export default class App extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/post").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}


  render() {
    return (
      <div className='container'>
        <h2>All posts</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope='column'>No</th>
              <th scope='column'>Topic</th>
              <th scope='column'>Description</th>
              <th scope='column'>Post Category</th>
              <th scope='column'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr>
                <th scope='row'>{index+1}</th>
                <td>{posts.topic}</td>
                <td>{posts.desc}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className='btn btn-warning' href='#'>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                </td>
                
                <td>
                  <a className='btn btn-danger' href='#'>
                    <i className='far fa-trash'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>


        </table>
      </div>
    )
  }
}
