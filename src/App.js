import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Animation from './categoryPage/Animation';
import Comedy from './categoryPage/Comedy';
import Classic from './categoryPage/Classic';
import Drama from './categoryPage/Drama';
import Horror from './categoryPage/Horror';
import Family from './categoryPage/Family';
import Mystery from './categoryPage/Mystery';
import Western from './categoryPage/Western';
import Login from './Login';

function App() {
  let category = ['animation', 'comedy', 'classic', 'drama', 'horror', 'family', 'mystery', 'western']
  let animation = [
    {
      "id": 1,
      "title": "Inside Out",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
      "imdbId": "tt2096673"
    },
    {
      "id": 2,
      "title": "Coco",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
      "imdbId": "tt2380307"
    },
    {
      "id": 3,
      "title": "Incredibles 2",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
      "imdbId": "tt3606756"
    },
    {
      "id": 4,
      "title": "Snow White and the Seven Dwarfs",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
      "imdbId": "tt0029583"
    }
  ]
  let comedy = [
    {
      "id": 1,
      "title": "Lady Bird",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "imdbId": "tt4925292"
    },
    {
      "id": 2,
      "title": "BlacKkKlansman",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg",
      "imdbId": "tt7349662"
    },
    {
      "id": 4,
      "title": "Eighth Grade",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
      "imdbId": "tt7014006"
    },
    {
      "id": 5,
      "title": "Coco",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
      "imdbId": "tt2380307"
    }
  ];
  let classic = [
    {
      "id": 1,
      "title": "The Wizard of Oz",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
      "imdbId": "tt0032138"
    },
    {
      "id": 2,
      "title": "Citizen Kane",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "imdbId": "tt0033467"
    },
    {
      "id": 3,
      "title": "The Third Man",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "imdbId": "tt0041959"
    },
    {
      "id": 4,
      "title": "Casablanca",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
      "imdbId": "tt0034583"
    }
  ]
  let navigate = useNavigate();
  
  const [onMouse, setOnMouse] = useState(false);
  const [genreClick, setGenreClick] = useState(true);

  return (
    <div className="App">
      <Navbar className='navbar' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> { 
              navigate('/') 
              setOnMouse(false)}}
              onMouseMove={() => setOnMouse(false)}>Home</Nav.Link>
            <Nav.Link  
            onMouseOver={() => {setOnMouse(true)}}
            >category</Nav.Link>
            <Nav.Link 
            onClick={()=>{navigate('/login')}}
            onMouseMove={() => setOnMouse(false)}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {onMouse ? <div className='categoryList' style={{marginLeft: '200px'}} >
        <div onMouseLeave={()=>{setOnMouse(false)}}>
          {category.map((a, i) => {
            return (
              <ShowLink key={i} navigate={navigate} setOnMouse={setOnMouse} genre={a}
              genreClick={genreClick} setGenreClick={setGenreClick} />
            )
          })}
        </div>
        
      </div> : null}
      <Routes>
        <Route path='/' element={
          <>
      <div style={{ margin: '20px 0'}}>
      <Carousel slide={false} style={{width: '400px', margin: '0 auto', paddingBottom: '20px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={animation[0].posterURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={animation[1].posterURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={animation[2].posterURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
      
      <div className='AnimationCard' style={{marginBottom: '20px'}}>
        <h2>Animation</h2>
        <Container>
          <Row>
        {animation.map((a, i) => {
          return (
                <ShowCard a={a} key={i} />
          )
        })}
          </Row>
          <button onClick={()=>{ navigate('/animation') }}>더보기</button>
      </Container>
      </div>
      <div className='ComedyCard'>
        <h2>Comedy</h2>
        <Container>
          <Row>
            {comedy.map((a, i) => {
              return(
                <ShowCard a={a} key={i} />
              )
            })}
          </Row>
        </Container>
        <button onClick={()=>{ navigate('/comedy') }}>더보기</button>
      </div>
      <div className='ClassicCard'>
      <h2>Classic</h2>
        <Container>
          <Row>
            {classic.map((a, i) => {
              return(
                <ShowCard a={a} key={i} />
              )
            })}
          </Row>
          <button onClick={()=>{ navigate('/classic') }}>더보기</button>
        </Container>
      </div>
          </>
        }/>
        <Route path='/login' element={<Login />} />
        <Route path='/animation/*' element={<Animation genre='animation' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />}/>
        <Route path='/comedy/*' element={<Comedy genre='comedy' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
        <Route path='/classic/*' element={<Classic genre='classic' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} /> 
        <Route path='/drama/*' element={<Drama genre='drama' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
        <Route path='/horror/*' element={<Horror genre='horror' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
        <Route path='/family/*' element={<Family genre='family' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
        <Route path='/mystery/*' element={<Mystery genre='mystery' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
        <Route path='/western/*' element={<Western genre='western' navigate={navigate} genreClick={genreClick} setGenreClick={setGenreClick} />} />
      </Routes>
      
       
    </div>
    
  );
}

function ShowCard(props) {
  return(
    <Col sm={2}>
      <img src={props.a.posterURL} alt='' width='100%'/>
    </Col>
  )
}

function ShowLink(props) {
  return (
    <li onClick={()=>{ 
      props.navigate(`/${props.genre}`)
      props.setOnMouse(false)
      props.setGenreClick(true)}}>{props.genre}</li>
  )
}
/* import React, { useState } from 'react';
import axios from 'axios';

function App () {
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState('');

  const getSearchMovie = async () => {
    const ID_KEY = 'MnfeP2_aehNOr9Z5c7Tc';
    const SECRET_KEY = 'CsNxoYCU14';
    const search = {value};
    try {
      if (search === "") {
        setMovie([]);
      } else {
        const {data: {
            items
          }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{
            params:{
              query: search,
              display: 2
            },
            headers: {
              'X-Naver-Client-Id': ID_KEY,
              'X-Naver-Client-Secret': SECRET_KEY
            }
          });
          console.log(items);
          setMovie(items);

      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={e => {
      e.preventDefault();
      getSearchMovie();
    }}>
      <div>
      <h1>movie search</h1>
      <input type='text' value={value} onChange={e => {setValue(e.target.value)}} />
      </div>
      <div>
        {movie.map(movie => (
          <SearchMovie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor} />
        ))}
      </div>
    </form>
  )
}

function SearchMovie({id, year, title, poster, rating, director, actor}) {
  return (
    <div className="movie">
      <img src={poster} alt={title} titlt={title}></img>
    <div className="movie__data">
      <h3 className="movie__title">{
          title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
        }</h3>
      <p className="movie__rating">
        <span>평점</span> {rating}/10
      </p>
      <p className="movie__year">
        <span>개봉일</span> {year}
      </p>
    <p className="movie__director">
      <span>감독</span> {director}
    </p>
    <p className="movie__actor">
      <span>배우</span> {actor}
    </p>
    </div>
  </div>
  )
}; */

export default App;
