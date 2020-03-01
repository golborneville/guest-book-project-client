import React from 'react';
import { Link } from 'react-router-dom';
import writingView from "./writingView";

const readerView = () => {

    return (
        <div>
            <Link to ={"/writingView"}>
            <button >
                새 글 작성하기
            </button></Link>
            <div className={"reader"} style={{margin:"5%"}}>
                <table width="100%" border="1" >
                    <div className={"customLayout"}>
                    <tr>
                        <td width="45%">
                        title part
                        </td>
                        <td width="45%">
                            writer part
                        </td>
                        <td width="10%">
                            <button style={{margin:5}}> 수정</button>
                            <button> 삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="100%" height="200" align="center">
                            note writings ;
                        </td>
                    </tr>
                    </div>
                </table>
            </div>
        </div>
    );
};

export default readerView;