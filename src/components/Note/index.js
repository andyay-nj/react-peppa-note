import React from 'react';
import './index.css';
import peppa15 from '../../image/peppa/peppa15.png';

class Note extends React.Component {
    render() {
        const { theNote, onEditNote } = this.props;
        const { title, contents } = theNote;
        return (
            <div className="note">
                <input 
                    className="title"
                    value={title}
                    onChange={(e) => onEditNote('title', e)} />
                <textarea
                    className="note-contents"
                    value={contents}
                    onChange={(e) => onEditNote('contents', e)}></textarea>
                <div className="title-logo">
                    <img className="image" src={peppa15}></img>
                </div>
                {/* <div><img className="image" src={peppa1}></img></div> */}
            </div>
        );
    }
}

export default Note;