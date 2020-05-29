import React from 'react';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <span>Nj's Peppa Note !</span>
                </div>
                <div className="buttons">
                    <button>추가</button>
                    <button>삭제</button>
                </div>
            </div>
        );
    }
}

export default Header;