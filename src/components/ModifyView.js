import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Guest from './Guest';
//파라미터값을 받아오기 위해 필요
import PropTypes from 'prop-types';

class ModifyView extends Component{
    static defaultProps = {
        idD:null

    };
    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);

        this.state = {title:null, password:null, noteWrite:null, writer:null};
        console.log('modify');
        console.log(this.props.idD);
    }

    //넘어오면서 여기서 idData에 해당 id만 넘겨와서 받으면 댐 근데!!!!!!!!!!!!!!!!!!!!!!!!!!!11 그걸 어케해
     componentWillMount(){
         fetch('/v1/notepad/'+this.props.idD)
             .then(res => res.json())
             .then(data => {
                 this.setState({
                     //한번에 설정이 안되서 일일히 해줌 슈밤
                     title:  //여기가 !! state 에는 note 가 업서여
                     (data.notepad.title), password:data.notepad.password,noteWrite:data.notepad.noteWrite, writer:data.notepad.writer });
                 console.log("state in woill-")
                 console.log(this.state);//this.state.note[0].id 이런식으로 접근하면 돼!!

             });


     };
    postNote = ()=> {
        console.log(this.state); //휴 로그 찍어보니까 스테이트에는 제대로 들어가네!
        fetch('/v1/notepad/'+this.props.idD,
            {
                method: 'PUT',
                body: JSON.stringify(this.state), headers: {
                    "Content-type": "application/json; charset=UTF-8" //이거 주석처리하면 작성자랑 제목 널이면 안된다고뜸
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(function (error) {
                console.log(error);
            });
        this.props.onClick();
    };

    handleChangeT = (e) => {
        this.setState({
           title : e.target.value
        });

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
    cancleNote=()=>{
         this.props.onClick();
    };

    render()
    {

        const {title, writer,password, noteWrite} = this.state;
        return (
            <div style={{width: "80%", margin: 20}}>
                <div className="aboutWrite" style={{Width: 600, padding: '20px '}}>
                    제목
                    <input type="text"
                           id="title"
                           className="title"
                           placeholder="제목"
                           value={title} onChange={this.handleChangeT}
                           style={{margin: '10px '}}
                    />
                </div>

                <div className="account" style={{Width: 600, padding: '10px '}}>
                    작성자
                    <input type="text"
                           className="writer" id={"writer"}
                           placeholder="작성자" style={{margin: "10px", marginRight:'20px'}}
                           value={writer} onChange={this.handleChangeW}
                    />

                    비밀번호
                    <input type="text"
                           className="password" id ={"pw"}
                           placeholder="비밀번호"
                           value={password} onChange={this.handleChangeP} disabled={true}
                           style={{margin: '10px '}}/>
                </div>
                <div className={"writerNote"} style={{Width: 600, Height: 600, padding: '20px '}}>
                    <p>본문</p>
            <textarea name="mainNote"
                      id={"main"}
                      placeholder="방명록 작성"
                      rows={"10"}
                      cols={"70"}
                      value={noteWrite} onChange={this.handleChangeN}
                      style={{margin: '10px '}}/>
                </div>
                <div className={"finalButtons"} style={{margin: 10, padding: 5}}>
                    <Link to={"/readerView"}>
                        <button className={"register"} style={{margin: 10}} onClick={this.postNote}>등록</button>
                    </Link>
                    <Link to={"/readerView"}>
                        <button className={"cancle"} onClick={this.cancleNote}>취소</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default ModifyView;