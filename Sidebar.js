import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  
} from 'cdbreact';
import Mainlogo from './Main logo';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
   <>
    <div style={{maxWidth: '10%', display: 'flex', height: '100vh',position: 'fixed'}}>
      <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader>
          <a href="/Home" className="text-decoration-none" style={{ color: 'White',fontSize:'1.5rem',fontWeight: 'bolder' }}>
            <Mainlogo/> Spotify
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="Home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Top Songs" activeClassName="activeClicked">
              <CDBSidebarMenuItem  icon="music">Top Songs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Favorites" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart">Favorites</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/My playlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="align-justify" >My Playlist</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/about" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">About Us</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
    </div>



   
   </>
  )
}
