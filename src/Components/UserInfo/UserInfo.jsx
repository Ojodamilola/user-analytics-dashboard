import React from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
   const {id} = useParams();

   const UserInfoModal = () => {
      switch(id){
         case '1': return <p>Hello {id}</p>;
         case '2': return <p>Hello {id}</p>;
         case '3': return <p>Hello {id}</p>;
         case '4': return <p>Hello {id}</p>;
         case '5': return <p>Hello {id}</p>;
         case '6': return <p>Hello {id}</p>;
         case '7': return <p>Hello {id}</p>;
         case '8': return <p>Hello {id}</p>;
         case '9': return <p>Hello {id}</p>;
         case '10': return <p>Hello {id}</p>;
         default: return <p>No Information found for ID {id}</p>
      };
   };
  return (
    <div>
      <h1> this is info {id}</h1>
      {UserInfoModal()}
      
    </div>
  )
}

export default UserInfo
