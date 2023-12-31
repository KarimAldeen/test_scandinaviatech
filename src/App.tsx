import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Page from './Pages/Home/Page';
const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))

const App = () => {

  
  return (
    
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}> <Page /></Suspense>} />

    </Routes>

        
     
  )
}

export default App