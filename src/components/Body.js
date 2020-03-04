import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Body extends Component{


    render() {
        return (
            <div>
                <Link to={'/readerView'} >
                    <button style={{margin: 15 }}>방명록 읽기</button>
                </Link>

                <Link to={'/writingView'}>
                    <button>방명록 쓰기</button>
                </Link>
            </div>
        );

    }
}

export default Body;