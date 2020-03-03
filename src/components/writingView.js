import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class writingView extends Component{

    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {title:null, password:null, noteWrite:null, writer:null};
        console.log('constructor !!');
    }
    postNote = ()=> {
        //console.log(this.state); //휴 로그 찍어보니까 스테이트에는 제대로 들어가네!
        fetch('/v1/notepad',
        {
            method: 'POST',
                body: JSON.stringify(this.state), headers: {
               "Content-type": "application/json; charset=UTF-8" //이거 주석처리하면 작성자랑 제목 널이면 안된다고뜸
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    };

    handleChangeT = (e) => {
        this.setState({
            title: e.target.value
        })
    };
    handleChangeW = (e) => {
        this.setState({

            writer: e.target.value
        })
    };
    handleChangeP = (e) => {
        this.setState({
            password: e.target.value
        })
    };
    handleChangeN = (e) => {
        this.setState({

            noteWrite: e.target.value
        })
    };
    render()
    {
        const {title, writer,password, noteWrite} = this.state;
        return (
            <div style={{width: "80%", margin: 20}}>
                <div className="aboutWrite" style={{Width: 600, padding: '20px '}}>
                    <input type="text"
                           id="title"
                           className="title"
                           placeholder="제목"
                           value={title} onChange={this.handleChangeT}
                    />

                </div>
                <div className="account" style={{Width: 600, padding: '10px '}}>
                    <input type="text"
                           className="writer" id={"writer"}
                           placeholder="작성자" style={{marginRight: "20px"}}
                           value={writer} onChange={this.handleChangeW}
                    />

                    <input type="text"
                           className="password" id ={"pw"}
                           placeholder="비밀번호"
                           value={password} onChange={this.handleChangeP}/>
                </div>
                <div className={"writerNote"} style={{Width: 600, Height: 600, padding: '20px '}}>
            <textarea name="mainNote"
                      id={"main"}
                      placeholder="방명록 작성"
                      rows={"10"}
                      cols={"70"}
                      value={noteWrite} onChange={this.handleChangeN}/>
                </div>
                <div className={"finalButtons"} style={{margin: 10, padding: 5}}>
                    <button className={"register"} style={{margin: 10}} onClick={this.postNote}>등록</button>
                    <Link to={"/readerView"}>
                        <button className={"cancle"}>취소</button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default writingView;