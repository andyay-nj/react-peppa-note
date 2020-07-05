import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        console.log(this.props)
        const { theNote, onEditNote } = this.props;
        const { title, content } = theNote;
        return (
            <div className="note">
                <div className="note-wrapper">
                    <input 
                        className="note-title"
                        value={title}
                        onChange={(e) => onEditNote('title', e)} />
                    <textarea
                        className="note-content"
                        value={content}
                        onChange={(e) => onEditNote('content', e)}></textarea>
                </div>
            </div>
        );
    }
}

export default Note;