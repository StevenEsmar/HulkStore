import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Products from './products/Products';

class Store extends React.Component {
    
    render(){
    return (
        <div>
            <div className="top_home">
                <span className="tit_top">Welcome to HulkStore</span>
                <Link to='/Authentication' ref={Link => this.LinkElement = Link}>
                    <Button variant="dark" className="login_b"> 
                        Login
                    </Button>
                </Link>
            </div>
            <Products/>
        </div>
    );
    }
  }
  
  export default Store;