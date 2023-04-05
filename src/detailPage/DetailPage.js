import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import '../css/DetailPage.css';
import { Button } from 'react-bootstrap';

function DetailPage(props) {
    let {id} = useParams();
    //let navigate = useNavigate();
    //console.log(id);
    const [ID, setID] = useState(Number(id));
    let rentPrice = props.priceList[ID-1];
    let buyPrice = Number(rentPrice) + 10;
    console.log(rentPrice)
    const [overRentButton, setOverRentButton] = useState(false);
    const [overBuyButton, setOverBuyButton] = useState(false);
    const [rentTitle, setRentTitle] = useState(`Rent $${rentPrice}  ▼`)
    const [buyTitle, setBuyTitle] = useState(`Buy $${buyPrice}  ▼`)
    
    return (
        <div className='detailPage'>
            <h1>{props.genre}</h1>
            <img src={props.list[ID-1].posterURL} alt=''
                onMouseOver={() => {console.log('hello')}}/>
            <h2>{props.list[ID-1].title}</h2>
            {ID === 1 ? <GrNext className='nextIcon' onClick={() => {setID(ID+1)}} /> 
            : <>
            <GrPrevious className='previousIcon' onClick={() => {setID(ID-1)}} />
            </> }
            {ID === props.list.length ? <GrPrevious className='previousIcon' onClick={() => {setID(ID-1)}} /> 
            : <>
            <GrNext className='nextIcon' onClick={() => {setID(ID+1)}}/>
            </> }
            <div className='rentButton'
            onMouseLeave={() => {
                setOverRentButton(false);
                setRentTitle(`Rent $${rentPrice}  ▼`);
                }} >
                <Button variant="info"
                onMouseOver={() => {
                    setOverRentButton(true);
                    setRentTitle('Rent ▲');
                }}>{rentTitle}</Button>
                {overRentButton ? <>
                <Button variant="info">SD ${rentPrice} </Button>
                <Button variant="info">HDX ${rentPrice} </Button>
                <Button variant="info">UHD ${rentPrice} </Button>
                </> : null }
            </div>
            <div className='buyButton'
            onMouseLeave={() => {
                setOverBuyButton(false);
                setBuyTitle(`Buy $${buyPrice}  ▼`);
                }} >
                <Button variant="info" 
                onMouseOver={() => {
                    setOverBuyButton(true);
                    setBuyTitle('Buy ▲');
                    }}>{buyTitle}</Button>
                {overBuyButton ? <>
                <Button variant="info">SD ${buyPrice} </Button>
                <Button variant="info">HDX ${buyPrice} </Button>
                <Button variant="info">UHD ${buyPrice} </Button>
                </> : null }
            </div>
            {/* <button onClick={()=>{
                props.setDetail(prev => !prev)
                navigate(-1)}} >back</button> */}
        </div>
    )
}

export default DetailPage;