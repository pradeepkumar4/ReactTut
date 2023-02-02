import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = {
  book1: {
      image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/895/9781786330895.jpg',
      title: 'Ikigai',
      author: 'Sudha Murthy'
  },
  book2: {
    image: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/895/9781786330895.jpg',
    title: 'Hooked',
    author: 'Stephen Hawking'
  }
}

function BookList() {
  return (
    <div className="booklist">
      <Book image={books.book1.image} title={books.book1.title} author={books.book1.author}/>
      <Book image={books.book2.image} title={books.book2.title} author={books.book2.author}/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = ({image, title, author}) => {
  return (
    <article className="book">
      <Image image={image}/>
      <Title title={title}/>
      <Author author={author}/>
    </article>
  )
}

const Image = (props) => {
  return (
    <>
      <img src={props.image} alt=''/>
    </>
  )
}

const Title = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
    </>
  )
}
const Author = (props) => {
  return (
    <>
      <h5>{props.author}</h5>
    </>
  )
}
ReactDom.render(<BookList />, document.getElementById('root'));