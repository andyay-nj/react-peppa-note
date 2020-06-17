import React from 'react';
import './index.css';
import peppa7 from '../../image/peppa/peppa7.jpg';
import peppa6 from '../../image/peppa/peppa6.png';

class Header extends React.Component {
    render() {
        const { onAddNote, onDeleteNote } = this.props;
        return (
            <div className="header">
                <div className="title">
                    <div className="title-logo">
                        <img className="image" src={peppa7}></img>
                    </div>
                    <div className="title-text">
                        <span>Peppa note</span>
                    </div>
                </div>
                <div className="buttons">
                    <button className="add" onClick={onAddNote}>
                        <img className="image" src={peppa6}></img>
                    </button>
                    {/* <button className="del" onClick={onAddNote}>
                        <img className="image" src={plus2}></img>
                    </button>                     */}
                </div>
            </div>
        );
    }
}

export default Header;