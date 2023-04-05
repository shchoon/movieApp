import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import DetailPage from '../detailPage/DetailPage';
import '../css/GenrePage.css';

function GenrePage(props) {
    let { genre } = useParams();
    useEffect(() => {
        
        axios.get(`https://api.sampleapis.com/movies/${genre}`).then((response)=>{
            /* for(let i=0; i<index.length; i++) {
                response.data.splice(index[i]-i, 1);
            } */
            console.log(response.data)
        props.setMovieList(response.data)
            })
            return () => {
                props.setMovieList([]);
            } 
        }, [])
        //console.log(movieList)
    return (
        <>
        {props.genreClick ?
        <div className="comedyPage">
        <h1>{genre}</h1>
        <Container>
            <Row>
            {props.movieList.map((a, i) => {
                return (
                    <Col className='card' sm={3} id={i} key={i} style={{paddingBottom: '10px'}}>
                    <img style={{cursor: 'pointer'}} src={a.posterURL} alt='' width='100%'
                    onClick={() => {
                        props.navigate(`/${genre}/detail/${i+1}`)
                        props.setGenreClick(false);
                    }}
                    />
                    </Col>
                )
            })}
            </Row>
        </Container>
    </div> : null }
    <Routes>
        <Route path='detail/:id' element={<DetailPage 
        genre={genre} list={props.movieList}  />} />
    </Routes>
        </>
    )
}

export default GenrePage;