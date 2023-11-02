import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    rank: '#1',
    img: './images/book1.jpg',
    title: 'Friends, Lovers, and the Big Terrible Thing: A Memoir',
    author: <p>By: Matthew Perry</p>,
  },
  {
    rank: '#2',
    img: './images/Book2.jpg',
    title: 'The Woman in Me',
    author: <p>By: Britney Spears </p>,
  },
  {
    rank: '#3',
    img: './images/Book3.jpg',
    title: 'Iron Flame (The Empyrean, 2)',
    author: <p>By: Rebecca Yarros </p>,
  },
  {
    rank: '#4',
    img: './images/Book4.jpg',
    title:
      'Killers of the Flower Moon: The Osage Murders and the Birth of the FBI',
    author: <p>By: David Grann</p>,
  },

  {
    rank: '#5',
    img: './images/Book5.jpg',
    title: 'No Brainer (Diary of a Wimpy Kid Book 18)',
    author: <p>By: Jeff Kinney </p>,
  },
  {
    rank: '#6',
    img: './images/Book6.jpg',
    title: 'The Great Disappearance: 31 Ways to be Rapture Ready',
    author: <p>By: Dr. David Jeremiah</p>,
  },
]
const BookList = () => {
  return (
    <div>
      <TopBar />
      <section className="list">
        {books.map((book) => {
          const { rank, img, title, author } = book
          return <Book rank={rank} author={author} title={title} img={img} />
        })}
      </section>
    </div>
  )
}
const TopBar = () => {
  return (
    <section className="Top-Bar">
      <h1 style={{ fontSize: '60px', color: '#ff9900' }}>
        Amazon Best Sellers
      </h1>
      <p style={{}}>
        Our most popular products based on sales. Updated frequently.
      </p>
    </section>
  )
}

const Book = (props) => {
  const { rank, img, title, author } = props
  return (
    <article className="information">
      <h3
        className="ranking"
        style={{
          backgroundColor: '#ff9900',
          marginRight: '330px',
          width: '30px',
          height: '20',
          padding: '5px',
          borderRadius: '10px',
          marginBottom: '40px',
        }}
      >
        {rank}
      </h3>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  )
}

const root1 = ReactDOM.createRoot(document.getElementById('root'))

root1.render(<BookList />)
