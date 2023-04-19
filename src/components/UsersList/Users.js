import React from 'react';
import "../Posts/Posts.css";
import PropTypes from 'prop-types';

function Users({users = 'user data', loading}) {
  
    if(loading) {
        return <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="sr-only"></span>
      </div>;
    }
  
  
  
    return (
      <div className="table-responsive-sm">
      <table className="table table-hover">
      <caption>source: <a href='https://jsonplaceholder.typicode.com/users'>https://jsonplaceholder.typicode.com/users</a></caption>
        <thead >
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company</th>
            <th scope="col">City</th>

          </tr>
        </thead>
        
          
        {users.map(user => (
          <tbody>
          <tr className='hover'>
            <th key={user.id} scope="row" className='id-column'>
                {user.id}
            </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
            </tr>
            </tbody>
        ))}
        
        
    </table>
    </div>
  )
}

Users.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.string,
    address: PropTypes.string,
  }),
};

export default Users;