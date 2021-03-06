import React from 'react';
import './index.css';
import peppa6 from '../../image/peppa/peppa6.png';

class Header extends React.Component {
    render() {
        const { onAddNote } = this.props;
        return (
            <div className="header">
                <div className="header-title">
                    <div className="header-text">
                        <span>Peppa note</span>
                    </div>
                </div>
                <div className="header-buttons">
                    <button className="header-add" onClick={onAddNote}>
                        <img className="header-image" src={peppa6} alt="add"></img>
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;