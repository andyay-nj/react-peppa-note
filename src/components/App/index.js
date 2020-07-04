import React from 'react';
import './index.css';
import stateObj from '../state';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generateId } from '../../util';
import peppa7 from '../../image/peppa/peppa7.jpg';
import { firestore, firedb } from '../../firebaseConfig';

class App extends React.Component {
    state = stateObj;

    componentWillMount() {
        const notes = this.state.notes;
        let id, title, content;

        firestore.collection('note').get()
        .then(docs => {
            docs.forEach(doc => {
                id = doc.data().id;
                title = doc.data().title;
                content = doc.data().content;
                
                notes.push({ id, title, content });
            });
            this.setState({ notes });
        });
    }

    handleListItemClick = (id) => {
        this.setState({activeId: id});
    }

	handelEditNote = (type, e) => {
		const notes = [...this.state.notes];
		const theNote = notes.find((item) => item.id === this.state.activeId);
		theNote[type] = e.target.value;
		this.setState({
			notes,
		})
	}
  
    handleAddNote = () => {
        const id = generateId();
        this.setState({
            notes: [
                ...this.state.notes,
                {
                id,
                title: '제목',
                content: '내용',
                },
            ],
            activeId: id,
        });
    }
  
    handleDeleteNote = () => {
        const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);

        this.setState({
            notes,
            activeId: notes.length === 0 ? null : notes[0].id,
        })
    }

    render() {
        const { notes, activeId } = this.state;
        const activeNote = notes.filter(item => item.id === activeId)[0];

        return (
            <div className="app">
            <Header
                onAddNote={this.handleAddNote}
                onDeleteNote={this.handleDeleteNote}
            />
            <div className="app-container">
                <List 
                notes={notes}
                activeId={activeId}
                onListItemClick={this.handleListItemClick} />
                {
                notes.length !== 0 &&
                <Note theNote={activeNote} onEditNote={this.handelEditNote} />
                }
            </div>
            <div className="app-remove" onClick={this.handleDeleteNote}>
                <img className="app-remove-icon" src={peppa7} alt="remove"></img>
            </div>
            </div>
        );
    }
}

export default App;
