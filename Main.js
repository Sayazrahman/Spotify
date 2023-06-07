
import React from 'react'
import Songscard from './Songscard'
import Sidebar from './Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
export default function Main() {
  return (
    <>
    <Router>
         <Sidebar/>
    </Router>
  


    <button className='btn mt-2' style={{float: 'right',color: 'white',fontWeight: 'bold',border: '1px solid black',borderRadius: '30px',backgroundColor: '#101010',fontSize: '12px'}}><i class='fas fa-user-alt mx-2' style={{fontSize:'15px',color: '#696969'}}></i>S Ayaz Rahman</button>
    <button className='btn mt-2 mx-2' style={{float: 'right',color: 'white',fontWeight: 'bold',border: '1px solid black',borderRadius: '30px',backgroundColor: '#1DB954',fontSize: '12px'}}>Upgrade</button>
 <div className=" container col md-2 my-3 sticky-top"style={{maxWidth: '75%', minWidth: '25%',float: 'right',marginLeft: '15rem'}}>
 
      <Songscard/>
  

    </div>
    </>
  )
}
