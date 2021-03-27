export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'JavaScript and jQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
      },
      {
        id: 2,
        title: 'You Don\'t Know JS: Scope & Closures',
        author: 'Kyle Simpson',
      },
    ];
  }
}