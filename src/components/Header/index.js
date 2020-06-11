import React from 'react';
import './index.css';

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
                        <img className="image" src="/static/media/plus2.png"></img>
                    </button>
                    <button className="del" onClick={onAddNote}>
                        <img className="image" src="../../images/plus2.png"></img>
                    </button>                    
                </div>
            </div>
        );
    }
}

export default Header;