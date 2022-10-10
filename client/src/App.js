import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
    <Router>


        <div className='container'>
          <NavBar/>
          
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/add' exact element={<CreatePost/>}/>
          <Route path='/edit/:id' exact element={<EditPost/>}/>
          <Route path='/posts/:id' exact element={<PostDetails/>}/>
      </Routes>
        </div>
    </Router>
     
    )
  }
}
