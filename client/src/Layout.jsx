import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      {/* Outlet은 현재 선택된 페이지가 렌더링됨 ex 로그인 페이지라면 LoginPage */}
    </div>
  )
}

export default Layout