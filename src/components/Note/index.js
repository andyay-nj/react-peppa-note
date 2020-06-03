import React from 'react';
import './index.css';

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
            </div>
        );
    }
}

export default Note;