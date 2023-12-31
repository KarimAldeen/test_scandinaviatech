import React from 'react'


const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {

  return (
 <div className='Layout'>
     {/* <NavBar/> */}
    <main className={`${className} Layout_Body`}>
        {children}
    </main>
    {/* <Footer/> */}
 </div>
  )
}

export default Layout