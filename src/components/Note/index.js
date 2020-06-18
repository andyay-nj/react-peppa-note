import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        const { theNote, onEditNote } = this.props;
        const { title, contents } = theNote;
        return (
            <div className="note">
                <div className="note-wrapper">
                    <input 
                        className="note-title"
                        value={title}
                        onChange={(e) => onEditNote('title', e)} />
                    <textarea
                        className="note-contents"
                        value={contents}
                        onChange={(e) => onEditNote('contents', e)}></textarea>
                </div>
            </div>
        );
    }
}

export default Note;