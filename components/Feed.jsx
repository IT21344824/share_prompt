'use client'

import { useState, useEffect } from 'react'
import PromtCard from './PromtCard'

const PromtCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromtCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input type="text"
          placeholder='Search for tag or username'
          onChange={handleSearchChange}
          value={searchText}
          className='search_input peer'
          required />
      </form>


      <PromtCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed
