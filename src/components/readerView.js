import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Guest from './Guest'
import GuestList from './GuestList'

class readerView extends Component{

    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {note:[], len:0};

        console.log('constructor !!');
    }
    componentWillMount() {

        fetch('/v1/notepad/')
            .then(res => res.json())
            .then(data => {
                this.setState({

                    note: this.state.note.concat
                    (data.notePads), len:data.notePads.length});
                console.log("readerView");
                console.log(this.state);

            })
            .catch(function (error) {
                console.log(error);
            });

    }
//음 솔직히 페치 한번으로 state에 배열 다 저장하고 싶은데 그거 반복문 해야하나 아리송 하다가 시간 다감 해결난거 없음 [key] 붙이면 뜨긴함
 //직접 일대일 대응이 아니라 한번에 추가 해버리니까 알아서 되네....? 생각보다 똑똑한 리액트


    refresh=()=>{
        window.location.reload();
    };
//0개 상태에서 하나 만들어주면 바로 업데이트가 안되네 왜지
    render() {
        const {data, len} = this.state;
        console.log("len"+len);

        return (
            <div onLoad={this.refresh}>
                { len>0?
                    <GuestList data={this.state.note} />:
                    <div style={{margin:'30px'}}>게시글이 없어요 ㅠㅁㅠ</div>
                }
            </div>
        );

    }
}

export default readerView;