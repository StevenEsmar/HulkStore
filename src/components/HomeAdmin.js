import React from 'react'
import { auth } from '../firebase'
import Button from 'react-bootstrap/Button';
import Products from './products/Products';

const HomeAdmin = (props) => {
    
    return (
        <div>
            <div className="top_home">
                <span className="tit_top">Administración HulkStore</span>
                <Button variant="dark" className="login_b" onClick={() => auth.signOut()}> 
                    Sign out
                </Button>
            </div>
            <Products userS={props.userSes}/>
        </div>
    )
}

export default HomeAdmin