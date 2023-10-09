class TodoList {
    constructor() {
      this.notes = [];
    }
  
    addNote(noteText) {
      if (noteText.trim() !== '') {
        const newNote = {
          text: noteText,
          completed: false,
        };
        this.notes.push(newNote);
      }
    }
  
    editNote(index, newText) {
      if (index >= 0 && index < this.notes.length && newText.trim() !== '') {
        this.notes[index].text = newText;
      }
    }
  
    deleteNote(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes.splice(index, 1);
      }
    }
  
    markNoteAsCompleted(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes[index].completed = true;
      }
    }
  
    getNoteInfo(index) {
      if (index >= 0 && index < this.notes.length) {
        const note = this.notes[index];
        return `Note Text: ${note.text}\nCompleted: ${note.completed ? 'Yes' : 'No'}`;
      }
      return 'Note not found';
    }
  
    getAllNotes() {
      return this.notes.map((note, index) => `${index + 1}. ${note.text} [${note.completed ? 'X' : ' '}]`);
    }
  
    getTotalNotes() {
      return this.notes.length;
    }
  
    getRemainingNotes() {
      const remainingNotes = this.notes.filter((note) => !note.completed);
      return remainingNotes.length;
    }
  }
  
  
  const myTodoList = new TodoList();
  
  myTodoList.addNote("Example task 1");
  myTodoList.addNote("Example task 2");
  myTodoList.addNote("Example task 3");
  
  console.log("All notes:");
  console.log(myTodoList.getAllNotes());
  
  myTodoList.markNoteAsCompleted(1);
  console.log("All notes after marking task 1 as completed:");
  console.log(myTodoList.getAllNotes());
  
  console.log(`Total notes: ${myTodoList.getTotalNotes()}`);
  console.log(`Remaining notes: ${myTodoList.getRemainingNotes()}`);