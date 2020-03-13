import React, { Component } from 'react';
import { Link , Route , Switch} from 'react-router-dom';
import Popup from "reactjs-popup";
import ModifyView from "./ModifyView";
import WrongPopUp from "./WrongPopUp";
import Guest from './Guest';

class GuestList extends Component{
    static defaultProps = {
        data: [],
    };

    state={
      setChange:false,
        idD:null
    };
    handleTest=(idD)=>{
        console.log("게스트 리스트 핸들 데이터");
        console.log(idD); // 여기 id까지는 나옴
        this.setState({setChange:true, idD:idD});
        //굳이 셋체인지를 체크 해줄 필요는 X
        // 이 함수가 호출 되는 것 자체가 비번 맞고 수정창으로 넘어가라는 의미니까.
        //id를 넘기며 Guest.js를 ModifyView.js 로 변환되게 해주자.
        // 서로 상-하위 컴포넌트가 아니니 라우트 혹은 링크 사용?
        //return <Link to={'/ModifyView'} value={idD}/>
    };
    comeBack=()=>{
        this.setState({setChange:false});
        window.location.reload();
    };
    render() {
        const { data } = this.props;
        const {setChange, idD} = this.state;
        console.log("this iis guest list");
        console.log(setChange); //여기까지 4는 나옴...


        const list = data.map(
            note => (<Guest  note={note}  onClick={this.handleTest}/>)
        );

        return (
            <div>
                {setChange ?
                    <div>
                        <ModifyView idD={idD} onClick = {this.comeBack}/>
                    </div>:
                    <div>
                        {list}
                    </div>
                }
            </div>

        );
    }
}

export default GuestList;