import React from 'react';

import './App.css';
import api from './api';

Class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      title:'',
      content:'',
    }

  }

  handlingChange = (event) => {
    this.setstate({[event.target.name]: event.target.value})
  }


  handlingSubmit = async (event) => {
     event.preventDefault() //event 디폴트 기능 막는것 (새로고침, 맨 위로 올라가기)
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    console.log("완료됨", result)

  }

 


  render (){
  return (
    <div className="App">
      <div className="PostingSection">
      <h2>대나무 숲 글 작성하기</h2>
      <form onSubmit={this.console.submit}>
      <input
      name="title"
      value={this.state.title}
      OnChange={this.handlingChange}
      />

      <textarea 
      name="content"
      value ={this.state.content}
      OnChange={this.handlingChange}
      />
      <button type="submit">제출하기 </button>
      </form>
      </div>
      <div className="ViewSection">

      </div>
    </div>
  );
}
}

export default App;
