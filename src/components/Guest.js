import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ModifyView from "./ModifyView";
import WrongPopUp from "./WrongPopUp";
import GuestList from "./GuestList";


class Guest extends Component {
    //state =  {chkpw:null, tof:false, idD:null};
    constructor(props) {
        super(props);
        this.state = {chkpw:null, idD:this.props.note.id, rightpw:true};

    }
    static defaultProps = {
        note: {
            title: '제먹',
            writer: '글슨이',
            noteWrite: '어저구내용',
            pw:null
        },

    };

    modifyNote=(e)=>{
        if(this.state.chkpw === this.props.note.password){
            //컴포넌트 간 데이터 이동해서 라이팅뷰 에 체인지 핸들 어쩌구 써서 채워두고 페치를 풋으로 설정
            this.setState({idD:this.props.note.id, rightpw:true}); //왜 스테이트 수정이 안되지

            console.log("state:");
            console.log(this.state);

            this.props.onClick(this.state.idD);
        }
        else {
            //이 부분에 빨간 글씨던 체크해서 인증 실패 라고 띄어주면 됨
            this.setState({rightpw:false});
            //내가 찾던 키워드가 조건부 렌더링 이엇음 아마도


        }

    };

    deleteNote=()=>{
        console.log("this.props.note.password");
        console.log(this.props.note.password);

        console.log("this.state");
        console.log(this.state.chkpw);
        if(this.state.chkpw === this.props.note.password){
            //console.log("비교문 체크"); //성!!!!공!!!!!!!!!
            this.setState({rightpw:true});
            fetch('/v1/notepad/'+this.props.note.id,
                {method:'DELETE'})
                .then(res => res.json())
                .then(data => {
                    console.log("deletion done!")
                });
            window.location.reload();
        }
        else {
            //이 부분에 빨간 글씨던 체크해서 인증 실패 라고 띄어주면 됨
            this.setState({rightpw:false});
        }
    }; //{tof? <ModifyView idData = {idData}/>:<div>dd</div>} 시발 <- rightpw를 해야 하고 그리고 popup밖에 해줘야 변함
    onChange = (e)=>{
        this.setState({
            chkpw : e.target.value
                      });
        console.log(e.type+ ':'+e.target.value);
    };
    render() {
        const {chkpw, idData, rightpw} = this.state;

        const {title, writer, noteWrite} = this.props.note;
        return (

            <div>
                <div className={"reader"} style={{margin: "5%"}}>
                    <table width="100%" border="1">
                        <div className={"customLayout"}>
                            <tr>
                                <td width="45%">
                                    {title}
                                </td>
                                <td width="45%">
                                    {writer}
                                </td>
                                <td width="10%">

                                    <Popup trigger={<button style={{margin: 5}}> 수정</button>}>
                                        <div>
                                            PASSWORD
                                            <input type={"text"} id={ 'pw'} value={chkpw} onChange={this.onChange}/>

                                                <button onClick={this.modifyNote} value={idData}>확인</button>
                                            {rightpw? <div/>:<div>틀렸습니다</div>}
                                        </div>
                                    </Popup>

                                    <Popup trigger={<button style={{margin: 5}}> 삭제</button>}>
                                        <div>
                                            PASSWORD
                                            <input type={"text"} id={ 'pw'} value={chkpw} onChange={this.onChange}/>
                                            <button onClick={this.deleteNote}>확인</button>
                                            {rightpw? <div/>:<div>틀렸습니다</div>}

                                        </div>
                                    </Popup>

                                </td>
                            </tr>
                            <tr>
                                <td colSpan="100%" height="200" align="center">
                                    {noteWrite}
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        );

    }
}

export default Guest;