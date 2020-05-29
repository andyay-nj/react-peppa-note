import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        const { note } = this.props;
        const { title, contents } = note;
        return (
            <div className="note">
                <input className="title" value={title} />
                <textarea className="note-contents" value={contents}>내용</textarea>
            </div>
        );
    }
}

export default Note;