import React, { Component } from 'react';
import Guest from './Guest';

class WrongPopUp extends Component{


    render() {
        return (
        <div>
            <div className={"text"}>
            틀린 비밀번호 입니다
            </div>
            <div>
                <button>
                    확인
                </button>
            </div>
        </div>

        );
    }
}

export default WrongPopUp;