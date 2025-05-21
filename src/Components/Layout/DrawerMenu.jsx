import React from 'react'

const DrawerMenu = ({ drawerVisible, toggleDrawer }) => {
  return (
    <div style={{ background: '#fff', padding: 16, width: 220 }}>
      <h4>Drawer Menu</h4>
      {/* <ul>
        <li>Dummy Link 1</li>
        <li>Dummy Link 2</li>
        <li>Dummy Link 3</li>
      </ul> */}
      <button onClick={toggleDrawer}>Close</button>
    </div>
  )
}

export default DrawerMenu
