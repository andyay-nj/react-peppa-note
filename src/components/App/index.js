import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
    state = {
      notes: [
        {id:'_dsafd111', title:'제목1',contents:'내용1'},
        {id:'_dsafd222', title:'제목2',contents:'내용2'},
        {id:'_dsafd333', title:'제목3',contents:'내용3'},
      ],
      activeId: '_dsafd222',
    }

    handleListItemClick = (id) => {
      this.setState({activeId: id});
	}
	
    render() {
		const { notes, activeId } = this.state;
		const activeNote = notes.filter((item) => item.id === activeId)[0];
        return (
          <div className="app">
            <Header />
            <div className="container">
              <List 
                notes={notes}
                activeId={activeId}
                onListItemClick={this.handleListItemClick} />
              {notes.length !== 0 && <Note note={activeNote} />}
            </div>
          </div>
        );
    }
}

export default App;
