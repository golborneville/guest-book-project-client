import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Guest from './Guest'
import GuestList from './GuestList'

class readerView extends Component{

    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {note:[]};

        console.log('constructor !!');
    }
    componentWillMount() {

        fetch('/v1/notepad/')
            .then(res => res.json())
            .then(data => {
                this.setState({

                    note: this.state.note.concat
                    (data.notePads)});
                console.log(data.notePads[0]);

            });

    }
//음 솔직히 페치 한번으로 state에 배열 다 저장하고 싶은데 그거 반복문 해야하나 아리송 하다가 시간 다감 해결난거 없음 [key] 붙이면 뜨긴함
 //직접 일대일 대응이 아니라 한번에 추가 해버리니까 알아서 되네....? 생각보다 똑똑한 리액트


    render() {

        return (
            <div>
                <GuestList data={this.state.note}/>

            </div>
        );

    }
}

export default readerView;