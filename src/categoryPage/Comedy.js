import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import DetailPage from '../detailPage/DetailPage';
import '../css/GenrePage.css';

function Comedy(props) {
    //let copy = [];
    const [comedyList, setComedyList] = useState([]);
    const [mouseOver, setMouseOver] = useState();
    const [yearList, setYearList] = useState([]);
    const [minList, setMinList] = useState([]);
    const [ageList, setAgeList] = useState([]);
    const [gradeList, setGradeList] = useState([]);
    const [priceList, setPriceList] = useState([]);
    let index = [2, 19, 74];
    useEffect(() => {
        
        axios.get('https://api.sampleapis.com/movies/comedy').then((response)=>{
            for(let i=0; i<index.length; i++) {
                response.data.splice(index[i]-i, 1);
            }
        setComedyList(response.data)
            })
            let length = comedyList.length 
            let year = [];
            for(let i=0; i<length; i++) {
                let a = Math.floor(1990 + Math.random()*(2021 - 1990 + 1));
                year.push(a);
            }
            setYearList(year);
            let min = [];
            for(let i=0; i<length; i++) {
                let a = Math.floor(90 + Math.random()*(150 - 90 + 1));
                min.push(a);
            }
            setMinList(min);
            let age = [];
            const aL = [7, 12, 15, 19];
            for(let i=0; i<length; i++) {
                let a = Math.floor(0 + Math.random()*(3 - 0 + 1));
                age.push(aL[a]);
            }
            setAgeList(age);
            let grade = [];
            const gL = ['3.0 ⭐⭐⭐', '4.0 ⭐⭐⭐⭐', '5.0 ⭐⭐⭐⭐⭐'];
            for(let i=0; i<77; i++) {
                let a = Math.floor(0 + Math.random()*(2 - 0 + 1));
                grade.push(gL[a]);
            }
            setGradeList(grade);
            let price = [];
            const pL = ['2.99', '3.99', '4.99', '5.99'];
            for(let i=0; i<77; i++) {
                let a = Math.floor(0 + Math.random()*(3 - 0 + 1));
                price.push(pL[a]);
            }
            setPriceList(price);
            
            return () => {
                setComedyList([]);
            }
        }, [])
    return (
        <>
        {props.genreClick ? 
            <div>
            <h1>Comedy</h1>
            <Container>
            <Row>
            {comedyList.map((a, i) => {
                return (
                    <div className='card' 
                    onClick={() => {
                        props.navigate(`/comedy/detail/${i+1}`);
                        props.setGenreClick(false);
                    }}
                    onMouseOver = {() => {setMouseOver(i)}}
                    >
                    <img src={a.posterURL} alt='' 
                    //onMouseLeave = {() => {setMouseOver()}}
                    />
                    <div className='card-text'>
                        {i === Number(mouseOver) ? 
                        <span className='text'>
                            <h6>{comedyList[i].title}</h6>
                            <li className='year-line'>{yearList[i]}  <div className='text-min'> {minList[i]} min </div></li>
                            <li>🔒 age {ageList[i]}+</li>
                            <li>{gradeList[i]}</li>
                            <li className='price-line'>Rent/Buy from {priceList[i]}</li>
                        </span> 
                        : null}
                    </div>
                    </div>    
                )
            })}
            </Row>
            </Container>
        </div> : null  }
        <Routes>
        <Route path='detail/:id' element={<DetailPage 
        genre='Comedy' genreClick={props.genreClick} setGenreClick={props.setGenreClick}
         list={comedyList} priceList={priceList} />}/> 
        </Routes>
        </>
    )
}

export default Comedy;