import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'

const PostsIndex = () => {
  return (
  <>
    <Header/>
    <Outlet/>
  </>
  )
}

export default PostsIndex