import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
export default function Songscard() {
const [data, setdata] = useState([])
const [search, setsearch] = useState('latest songs')

 
const options = {
  method: 'GET',
  url: 'https://spotify-web2.p.rapidapi.com/search/',
  params: {
    q: `${search}`,
    type: 'multi',
    offset: '0',
    limit: '100',
    numberOfTopResults: '5'
  },
   headers: {
    'X-RapidAPI-Key': 'fb58f3c053mshc3f37da819f64b5p185b09jsncd328529ed63',
    'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
  }
};

const getdata=()=>{
  axios.request(options).then(function (response) {
    console.log(response.data.tracks.items);
    setdata(response.data.tracks.items)
  }).catch(function (error) {
    console.error(error);
  });
}

  useEffect(() => {
   getdata()
  }, [])
  const handlesearch=(e)=>{
    e.preventDefault()
    getdata(search)
  }
  const handlesetsearch=(e)=>{
    e.preventDefault()
  setsearch(e.target.value)
  }
  
  
  return (
    <>
  <div class="search-box">
    <button class="btn-search"><i class="fas fa-search" id ="icon" onClick={handlesearch}></i></button>
    <input type="text" class="input-search"  onChange={handlesetsearch} placeholder="What do you want to listen..."/>
  </div>

        { data?
data.map((element)=>{
  return(
    
        <div class="card d-inline-flex mx-3 cardhover " key={element.data.id} style={{marginTop: '1rem',height: '19rem',border: '1px solid ',width: '13rem',backgroundColor: '#101010',hover: '#303030',overflow: 'hidden'}}>
  <img src= {element.data.albumOfTrack.coverArt.sources[0].url} class="card-img-top" alt="..." style={{minWidth: '0.5rem',padding: '0.9rem'}}/>
  <div class="card-body" style={{backgroundColor: '#101010',color: 'white'}}>
    <h6 class="card-title" style={{fontSize: '0.8rem'}}>{element.data.albumOfTrack.name}</h6>
    
    <a href= {element.data.albumOfTrack.sharingInfo.shareUrl} target = '__new'class="btn btn" style={{backgroundColor: '#1DB954',borderRadius: '50px'}} ><i class='fas fa-play mx-2' style={{fontSize:'15px',color: 'black'}}></i>Play</a>
  </div>
</div>
       
      
    

  )
})
: ""}



   </>
    
  )
}
