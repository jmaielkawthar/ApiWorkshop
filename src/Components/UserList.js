import React from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = ({list,loading}) => {
  return (
    <div>
        {loading?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:
            list && React.Children.toArray(list.map(el=><UserCard user={el}/>))
        }
    </div>
  )
}

export default UserList