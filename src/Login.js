import './css/Login.css';
import { Form, Button, FloatingLabel, Nav } from 'react-bootstrap';
import { useState } from 'react';


function Login(props) {
    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);
    return(
        <div className='loginPage'>
            <div className="border">
            <h1 style={{marginBottom: '30px'}}>Login</h1>
            <form className='loginForm' onSubmit={e => {
                e.preventDefault();
                if(pw == null) {
                    alert('비밀번호를 입력해주세요');
                } else {
                    props.navigate('/');
                }
            }}>
            <FloatingLabel style={{margin: '0 10px'}}
                controlId="floatingInput"
                label="Email address"
                className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" 
                onChange={e => {setId(e.target.value)}}/>
            </FloatingLabel>
            <FloatingLabel style={{margin: '0 10px'}} controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" onChange={e => {
                    setPw(e.target.value);
                }} />
            </FloatingLabel>
            <Button className='loginButton' type='submit' variant="primary"
            style={{marginTop: '20px'}}>Login</Button>
            </form>
            </div>
        </div>
    )
}

export default Login;