import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {





  return (
    <div className="App">
      <div className="aboutWrite" style={{ maxWidth: 600, padding: '20px ' }}>
        <input type="text"
        className="title"
        placeholder="제목"
        />
      </div>
      <div className="account" style={{maxWidth: 600, padding:'10px '}}>
          <input type="text"
                 className="writer"
                 placeholder="작성자" style={{marginRight:"20px"}}
          />

          <input type="text"
                 className="password"
                 placeholder="비밀번호"/>
      </div>
        <div className={"writerNote"} style={{maxWidth: 600, maxHeight:600, padding:'20px '}}>
            <textarea name="mainNote"
                   placeholder="방명록 작성"
            rows={"10"}
            cols={"70"}/>
        </div>
      <div className={"finalButtons"} style = {{margin :10, padding :5}}>
        <button className={"register"} style = {{margin :10}}>등록</button>
          <button className={"cancle"}>취소</button>
      </div>
    </div>
  );
}

export default App;
