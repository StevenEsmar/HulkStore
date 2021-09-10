import db from '../../firebase';
import {Card, Button,CardGroup,Tab,Modal,Form, Tabs} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';

function Products(props) {
  const [products,setProducts]=useState([]);
  const [edit,setEdit]=useState(null);
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [cantidad, setCantidad] = useState(false);
  const [ncantidad, setNCantidad] = useState(false);
  const [precio, setPrecio] = useState(false);
  const [nombre, setNombre] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {setShow(true);setEdit(e)};
  const handleCloseCon = () => setConfirm(false);
  const handleShowCon = (e,ev) => {setConfirm(true);setEdit(e);setNCantidad(ev)};

  const getProducts=async()=>{
    
    db.collection("products").get().then((querySnapshot)=>{
        querySnapshot.forEach(product =>{
            var data = product.data();
            data.ide = product.id;
            setProducts(arr=> [...arr,data]);
        });
        
    })
  }

  const updateProducts=async()=>{
    handleClose();
    db.collection("products").doc(edit).update(
        {Nombre: nombre, Precio: precio ,Cantidad:cantidad}
    );
    
  }
  const updateVenta=async()=>{
    handleCloseCon();
    db.collection("products").doc(edit).update(
        {Cantidad:ncantidad-1}
    );
    
  }

  useEffect(() => {
    getProducts();
  }, []);
 
 
  const changeCantidad =(event)=>{
      setCantidad(event.target.value)
  }
  const changePrecio =(event)=>{
    setPrecio (event.target.value)
  }
    const changeNombre =(event)=>{
    setNombre(event.target.value)
  }

  return (
    <div className="App">
        <div>
            {/* {edit ? <div className="popup_edit"> Modificar producto {edit} </div>:<div></div>} */}
            {/* <div className="popup_edit"> Modificar producto {edit} </div> */}
        <Tabs defaultActiveKey="todos" id="uncontrolled-tab-example" className="tab_home">
        <Tab eventKey="todos" title="Todos nuestros productos">
            <CardGroup>
            { 
                products.map((prod,id)=>{
                return(
                    
                    <div className="" key={id}>
                        
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
                            <Button variant="success" onClick={()=>handleShow(prod.ide)} >Modificar</Button>:
                            <Button variant="success" onClick={()=>handleShowCon(prod.ide,prod.Cantidad)}disabled={prod.Cantidad <= 0} >Comprar</Button>}
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
                products.map((prod,id)=>{
                return(
                    
                    <div className="" key={id}>
                        
                        {prod.Categoria === "Ropa" ?
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
                            <Button variant="success" onClick={()=>handleShow(prod.ide)} >Modificar</Button>:
                            <Button variant="success" onClick={()=>handleShowCon(prod.ide,prod.Cantidad)}disabled={prod.Cantidad <= 0} >Comprar</Button>}
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
                products.map((prod,id)=>{
                return(
                    
                    <div className="" key={id}>
                        
                        {prod.Categoria === "Juguete" ?
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
                            <Button variant="success" onClick={()=>handleShow(prod.ide)} >Modificar</Button>:
                            <Button variant="success" onClick={()=>handleShowCon(prod.ide,prod.Cantidad)}disabled={prod.Cantidad <= 0} >Comprar</Button>}
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
                products.map((prod,id)=>{
                return(
                    
                    <div className="" key={id}>
                        
                        {prod.Categoria === "Accesorios" ?
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
                            <Button variant="success" onClick={()=>handleShow(prod.ide)} >Modificar</Button>:
                            <Button variant="success" onClick={()=>handleShowCon(prod.ide,prod.Cantidad)}disabled={prod.Cantidad <= 0} >Comprar</Button>}
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
        {/*------------------ Modal para la edición de los productos -------------------------------*/}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modificar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control onChange={changeNombre} type="text" placeholder="" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control onChange={changePrecio} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Unidades disponibles del producto</Form.Label>
                    <Form.Control onChange={changeCantidad} type="number" placeholder="" />
                </Form.Group>
            
                </Form>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="success" onClick={updateProducts}>
                Guardar cambios
            </Button>
            </Modal.Footer>
        </Modal>
       {/*------------------ Modal para confirmar compra -------------------------------*/}
       <Modal show={confirm} onHide={handleCloseCon}>
            <Modal.Header closeButton>
            <Modal.Title>Confirmar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label className="mb-3">
                        ¿Desea confirmar la compra del producto?
                    </Form.Label>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCon}>
                Cancelar
            </Button>
            <Button variant="success" onClick={updateVenta}>
                Confirmar
            </Button>
            </Modal.Footer>
        </Modal>
      </div>
      
    </div>
  );
}

export default Products;