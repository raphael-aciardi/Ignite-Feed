import { useState } from 'react';
import { Post } from './Post';
import './global.css'
import { Header } from './components/Header';


function App() {
  

  return (
    <div>
      <Header/>
      <Post autor="John Doe"/>
      <Post autor="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, magni, error ullam est dolor qu
        od consequuntur ducimus quae similique aperiam molestias provident, obcaecati quisquam repellendus. Cumque non ullam doloribus nobis."
      />
    </div>
  )
}

export default App


