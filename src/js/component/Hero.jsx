import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function Hero () {
    return <>
        <Container style={{background: '#d7dbe0'}}>
            <div className="mx-5">
                <p style={{fontSize: '5rem'}}>A Warm Welcome!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus numquam eum architecto culpa tempore repudiandae excepturi illo odio ut incidunt corporis, facilis atque quis ipsa aut voluptates nobis sapiente.</p>
                <button className="btn btn-primary px-3 py-2 mb-5" >Call to action!</button>
            </div>

        </Container>

    </>


}
export default Hero;