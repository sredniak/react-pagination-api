import React from 'react';
import "./Posts.css";
import PropTypes from 'prop-types';

function Posts({posts, loading}) {
  
    if(loading) {
        return <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="sr-only"></span>
      </div>;
    }
  
  
  
    return (

      <table className="table table-hover">
        <caption>source: <a href='https://jsonplaceholder.typicode.com/posts'>https://jsonplaceholder.typicode.com/posts</a></caption>
        <thead >
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Post title</th>
          </tr>
        </thead>
        
          
        {posts.map(post => (
          <tbody>
          <tr>
            <th key={post.id} scope="row" className='id-column'>
                {post.id}
            </th>
            <td>{post.title}</td>
            </tr>
            </tbody>
        ))}
        
        
    </table>
  );

}

Posts.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default Posts;