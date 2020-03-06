import React, { Component } from 'react';
import Popup from "reactjs-popup";


class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {chkpw:null};

    }
    static defaultProps = {
        note: {
            title: '제먹',
            writer: '글슨이',
            noteWrite: '어저구내용',
            pw:null
        },

    };

    modifyNote=()=>{
        if(this.state.chkpw === this.props.note.password){
            //컴포넌트 간 데이터 이동해서 라이팅뷰 에 체인지 핸들 어쩌구 써서 채워두고 페치를 풋으로 설정

        }
    };

    deleteNote=()=>{
        console.log("this.props.note.password");
        console.log(this.props.note.password);

        console.log("this.state");
        console.log(this.state.chkpw);
        if(this.state.chkpw === this.props.note.password){
            //console.log("비교문 체크"); //성!!!!공!!!!!!!!!
            fetch('/v1/notepad/'+this.props.note.id,
                {method:'DELETE'})
                .then(res => res.json())
                .then(data => {
                    console.log("deletion done!")
                });
            window.location.reload();
        }

    };
    onChange = (e)=>{
        this.setState({
            chkpw : e.target.value
                      });
        console.log(e.type+ ':'+e.target.value);
    };
    render() {
        const {chkpw} = this.state;
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
                                            <button onClick={this.modifyNote}>확인</button>
                                        </div>
                                    </Popup>
                                    <Popup trigger={<button style={{margin: 5}}> 삭제</button>}>
                                        <div>
                                            PASSWORD
                                            <input type={"text"} id={ 'pw'} value={chkpw} onChange={this.onChange}/>
                                            <button onClick={this.deleteNote}>확인</button>
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