import React from 'react';
import "../Posts/Posts.css";

function Users({posts, loading}) {
  
    if(loading) {
        return <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="sr-only"></span>
      </div>;
    }
  
  
  
    return (
      <div class="table-responsive-sm">
      <table class="table table-hover">
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
        
          
        {posts.map(post => (
          <tbody>
          <tr className='hover'>
            <th key={post.id} scope="row" className='id-column'>
                {post.id}
            </th>
            <td>{post.name}</td>
            <td>{post.username}</td>
            <td>{post.email}</td>
            <td>{post.phone}</td>
            <td>{post.website}</td>
            <td>{post.company.name}</td>
            <td>{post.address.city}</td>
            </tr>
            </tbody>
        ))}
        
        
    </table>
    </div>
  )
}

export default Users;