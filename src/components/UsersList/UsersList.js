import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Users from './Users';
import Pagination from '../Pagination/Pagination';
import Wrapper from "../PostsList/PostsList.styles";



function UsersList() {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(5);


useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setPosts(res.data);
    setLoading(false);
  }

  fetchPosts();

},[]);


//Get current Posts

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <Wrapper>
        <div className="m-5">
            <h1 className="text-primary mb-3">Users List</h1>
      
            <Users posts={currentPosts} loading={loading}/>
      
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    </Wrapper>
  );
}

export default UsersList;
