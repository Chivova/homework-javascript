/*  Заметки
Напиши класс Notes который управляет коллекцией
заметок в свойстве notes.
Заметка это объект со свойствами text и priority.
Добавь классу статическое свойство Priority,
в котором будет храниться объект с приоритетами.

{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

Добавь методы addNote(note), removeNote(text)
и updateNotePriority(text, newPriority). */

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.table(myNotes.notes);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.table(myNotes.notes);

myNotes.removeNote('Моя первая заметка');
console.table(myNotes.notes);

myNotes.updateNotePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.table(myNotes.notes);
