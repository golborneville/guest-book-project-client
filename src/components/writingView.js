import React from 'react';
import { Link } from 'react-router-dom';

const writingView = () => {
    return (
        <div style={{width:"80%", margin:20}}>
            <div className="aboutWrite" style={{ Width: 600, padding: '20px ' }}>
                <input type="text"
                       className="title"
                       placeholder="제목"
                />

            </div>
            <div className="account" style={{Width: 600, padding:'10px '}}>
                <input type="text"
                       className="writer"
                       placeholder="작성자" style={{marginRight:"20px"}}
                />

                <input type="text"
                       className="password"
                       placeholder="비밀번호"/>
            </div>
            <div className={"writerNote"} style={{Width: 600, Height:600, padding:'20px '}}>
            <textarea name="mainNote"
                      placeholder="방명록 작성"
                      rows={"10"}
                      cols={"70"}/>
            </div>
            <div className={"finalButtons"} style = {{margin :10, padding :5}}>
                <button className={"register"} style = {{margin :10}}>등록</button>
                <Link to={"/readerView"}>
                    <button className={"cancle"}>취소</button></Link>
            </div>
        </div>
    );
};

export default writingView;