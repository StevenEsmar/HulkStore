import db from '../../firebase';
import {Card, Button,CardGroup,Tab,Modal,Form, Tabs} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';

function Products(props) {
  const [products,setProducts]=useState([]);
  const [edit,setEdit]=useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => setShow(true);
  const getProducts=async()=>{
    
    db.collection("products").get().then((querySnapshot)=>{
        querySnapshot.forEach(product =>{
            var data = product.data();
            setProducts(arr=> [...arr,data]);
        });

    })
  }
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  
  return (
    <div className="App">
        <div>
            {/* {edit ? <div className="popup_edit"> Modificar producto {edit} </div>:<div></div>} */}
            {/* <div className="popup_edit"> Modificar producto {edit} </div> */}
        <Tabs defaultActiveKey="todos" id="uncontrolled-tab-example" className="tab_home">
        <Tab eventKey="todos" title="Todos nuestros productos">
            <CardGroup>
            { 
                products.map((prod,i)=>{
                return(
                    
                    <div className="" key={i}>
                        
                        <div className="">
                        <Card className="cards_cust">
                            <Card.Img variant="top" className="img_cards" src={`${prod.Imagen}`} />
                            <Card.Body>
                            <Card.Title>{prod.Nombre}</Card.Title>
                            {prod.Cantidad <= 0 ? 
                            <Card.Text style={{color:'red'}}>
                                Unidades disponibles: {prod.Cantidad} (Agotado)
                            </Card.Text>
                            :
                            <Card.Text>
                                Unidades disponibles: {prod.Cantidad} 
                            </Card.Text>
                            }
                            <Card.Text>
                                Precio: ${prod.Precio}
                            </Card.Text>
                            {props.userS ?
                            <Button variant="success" onClick={()=>setEdit(prod.id)}>Modificar</Button>:
                            <Button variant="success" onClick={handleShow}/* onClick={()=>setEdit(prod.id)} disabled={prod.Cantidad <= 0} */>Comprar</Button>}
                            </Card.Body>
                        </Card>
                        </div>
                    
                    </div>
                )
                })
            }
            </CardGroup>
            </Tab>
            <Tab eventKey="cat1" title="Ropa">
            <CardGroup>
            { 
                products.map((prod,i)=>{
                return(
                    
                    <div className="" key={i}>
                        
                        {prod.Categoria === "Ropa" ?
                        <div className="">
                        <Card className="cards_cust">
                            <Card.Img variant="top" className="img_cards" src={`${prod.Imagen}`} />
                            <Card.Body>
                            <Card.Title>{prod.Nombre}</Card.Title>
                            <Card.Text>
                                Unidades disponibles: {prod.Cantidad}<br/> 
                                Precio: ${prod.Precio}
                            </Card.Text>
                            {props.userS ?
                            <Button variant="success">Modificar</Button>:
                            <Button variant="success">Comprar</Button>}
                            </Card.Body>
                        </Card>
                        </div>:
                        <div></div>
                        }
                    
                    </div>
                )
                })
            }
            </CardGroup>
            </Tab>
            <Tab eventKey="cat2" title="Juguetes">
            <CardGroup>
            { 
                products.map((prod,i)=>{
                return(
                    
                    <div className="" key={i}>
                        
                        {prod.Categoria === "Juguete" ?
                        <div className="">
                        <Card className="cards_cust">
                            <Card.Img variant="top" className="img_cards" src={`${prod.Imagen}`} />
                            <Card.Body>
                            <Card.Title>{prod.Nombre}</Card.Title>
                            <Card.Text>
                                Unidades disponibles: {prod.Cantidad}<br/> 
                                Precio: ${prod.Precio}
                            </Card.Text>
                            {props.userS ?
                            <Button variant="success">Modificar</Button>:
                            <Button variant="success">Comprar</Button>}
                            </Card.Body>
                        </Card>
                        </div>:
                        <div></div>
                        }
                    
                    </div>
                )
                })
            }
            </CardGroup>
            </Tab>
            <Tab eventKey="cat3" title="Accesorios">
            <CardGroup>
            { 
                products.map((prod,i)=>{
                return(
                    
                    <div className="" key={i}>
                        
                        {prod.Categoria === "Accesorios" ?
                        <div className="">
                        <Card className="cards_cust">
                            <Card.Img variant="top" className="img_cards" src={`${prod.Imagen}`} />
                            <Card.Body>
                            <Card.Title>{prod.Nombre}</Card.Title>
                            <Card.Text>
                                Unidades disponibles: {prod.Cantidad}<br/> 
                                Precio: ${prod.Precio}
                            </Card.Text>
                            {props.userS ?
                            <Button variant="success">Modificar</Button>:
                            <Button variant="success">Comprar</Button>}
                            </Card.Body>
                        </Card>
                        </div>:
                        <div></div>
                        }
                    
                    </div>
                )
                })
            }
            </CardGroup>
            </Tab>
        </Tabs>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modificar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Unidades disponibles del producto</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
            
                </Form>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="success" onClick={handleClose}>
                Guardar cambios
            </Button>
            </Modal.Footer>
        </Modal>
       
      </div>
      
    </div>
  );
}

export default Products;