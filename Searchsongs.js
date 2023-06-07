import React from 'react'

export default function Searchsongs(props) {
  const search = (e)=>{
    props.setsearch(e.target.value)
  }
  return (
    <div class="input-group rounded mt-3" style={{width: '50%',marginLeft: '15vw'}}>
  <input type="search" class="form-control rounded" value={props.search}  aria-label="Search" aria-describedby="search-addon"  />
  <span class="input-group-text border-0 mx-2" id="search-addon" onClick={search}>
    <i class="fas fa-search"></i>
  </span>
</div>
  )
}
