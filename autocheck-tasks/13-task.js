// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.

const bookShelf = {
  books: ["Последнее королевство", "Мгла", "Страж снов"],
  updateBook(oldName, newName) {
    const indexRemoveBook = this.books.indexOf(oldName);
    console.log(this.books.indexOf(oldName));
    this.books.splice(indexRemoveBook, 1, newName);

    return this.books;
  },
};

console.log(bookShelf.updateBook("Мгла", "Хроники подземелий")); //значение свойства books ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

console.log(bookShelf.updateBook("Последнее королевство", "Дюна")); //значение свойства books ['Дюна', 'Мгла', 'Страж снов'].
