import React from 'react'
//import {Link} from 'react-router-dom';
// import './all.css'
import './dashboard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import UserNavbar from './usernavbar';
import BarGraph from './bargraphs';

function UserDashBoard(){
    return(
        <div className='cm1'>
          <div className='row'>
              <div className='col-md-3'><UserNavbar/></div>
              <div className='col-md-9 dashdisplay'>
                <div className = 'row'>
                <div className='col-md-4'>

                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
                <center><Card.Img variant="top" src="https://www.shutterstock.com/image-vector/electricity-logo-260nw-416654494.jpg"  style={{ width: '50%', height: 'auto',borderRadius:'0' }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>ELECTRICIAL</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
                <center><Card.Img variant="top" src="https://static5.depositphotos.com/1011415/483/v/950/depositphotos_4837119-stock-illustration-painting-red-and-blue.jpg"  style={{ width: '50%', height: 'auto',borderRadius:'0'  }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>PAINTER</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
                <center><Card.Img variant="top" src="https://www.shutterstock.com/image-illustration/plumbing-simple-tools-clipart-isolated-260nw-1410465914.jpg"  style={{ width: '50%', height: 'auto',borderRadius:'0'  }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>PLUMBING</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>

                </div>



                <div className = 'row'>
                <div className='col-md-4'>

                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
      <center> <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/04/59/12/14/240_F_459121441_5Q0BmTAaK8TjjlN7z4G9frEIRmXyyGmd.jpg"  style={{ width: '50%', height: 'auto',borderRadius:'0'  }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>CARPENTER</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
                <center><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKXW6_TwxRxZpYJi6IivyAAaYe5NMgOB70xdS1Hc4llwuYtAOrI-qb-duScj4ja_ljmcOc_651E4&usqp=CAU&ec=48600112"  style={{ width: '50%', height: 'auto',borderRadius:'0'  }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>CIVIL</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '15rem', height: '13rem',marginTop:'90px' }}>
                <center> <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/23/04/95/360_F_523049529_mJhbNHswWYoJHG3fYk8dGp0GHIZNhJlW.jpg"  style={{ width: '50%', height: 'auto',borderRadius:'0'  }} /></center>
              <Card.Body>
         <Card.Title style={{color:'black'}}>OTHERS</Card.Title>
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'red'}}>pending</Button>
         
         <Button variant="primary" type="submit" style={{marginRight:'10px',background:'green'}}>solved</Button>
       </Card.Body>
     </Card>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                

                </div>
                <div className = 'row' style={{paddingTop:'80px'}}>
                <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div>
                <div className='col-md-1'></div>
                <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div> 
                <div className='col-md-1'></div>
                 <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div>
                </div>
                
                <div className = 'row graph_card' style={{paddingTop:'80px'}}>
                <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div>
                <div className='col-md-1'></div>
                <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div> 
                <div className='col-md-1'></div>
                 <div className='col-md-3 gra' style={{border:'2px solid blue'}}><BarGraph/></div>
                </div>

              </div>
        </div>



        </div>
    )
}
export default UserDashBoard
