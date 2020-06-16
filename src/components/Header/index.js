import React from 'react';
import './index.css';
import plus1 from '../../image/icon/plus1.png';
import plus2 from '../../image/icon/plus2.png';
import peppa2 from '../../image/peppa/peppa2.png';

class Header extends React.Component {
    render() {
        const { onAddNote, onDeleteNote } = this.props;
        return (
            <div className="header">
                <div className="title">
                    <span>NJ's PEPPA NOTE</span>
                </div>
                <div className="buttons">
                    <button className="add" onClick={onAddNote}>
                        <img className="image" src={peppa2}></img>
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