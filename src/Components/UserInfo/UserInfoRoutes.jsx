import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import UserInfo from './UserInfo'

const UserInfoRoutes = () => {
   const id = useParams();
  return (
    <>
      <Routes>
           
      <Route key={id} path='/:id' element={<UserInfo />} />
       {/**   <Route path='/userInfo/1' element={<h1> Info {id}</h1> } />
         <Route path='/userInfo/2' element={ <h1> Info {id}</h1> } />
         <Route path='/userInfo/3' element={<h1> Info {id}</h1>} />
         <Route path='/userInfo/4' element={<h1> Info {id}</h1> } />
         <Route path='/userInfo/5' element={<h1> Info {id}</h1>} />
         <Route path='/userInfo/6' element={<h1> Info {id}</h1>} />
         <Route path='/userInfo/7' element={<h1> Info {id}</h1>} />
         <Route path='/userInfo/8' element={<h1> Info {id}</h1>} />
         <Route path='/userInfo/9' element={<h1> Info {id}</h1>}/>
         <Route path='/userInfo/10' element={<h1> Info</h1> } />
         */}
      </Routes>
    </>
  )
}

export default UserInfoRoutes
