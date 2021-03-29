export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'JavaScript and jQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      price: 16.51,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'You Don\'t Know JS: Scope & Closures',
      author: 'Kyle Simpson',
      price: 24.95,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 700);
    });
  }
}