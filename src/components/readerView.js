import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class readerView extends Component{

    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {title:null, writer:null, noteWrite:null};
        console.log('constructor !!');
    }
    componentWillMount() {

        fetch('/v1/notepad/111')
            .then(res => res.json())
            .then(data => {
                this.setState({title: data.notepad.title, writer:data.notepad.writer, noteWrite: data.notepad.noteWrite});
                console.log(data);
            });

    }

    render() {
        const{title, writer, noteWrite} = this.state;
        return (
            <div>
                <Link to={"/writingView"}>
                    <button>
                        새 글 작성하기
                    </button>
                </Link>
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
                                    <button style={{marginBottom: 5}}> 수정</button>
                                    <button> 삭제</button>
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

export default readerView;