import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Page from './Pages/Home/Page';
import {Spinner} from 'reactstrap'


const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))
const App = () => {

  
  return (
    
    <Routes>
      <Route path="*" element={<Suspense fallback={<Spinner/>}> <Page404 /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Spinner/>}> <Page /></Suspense>} />

    </Routes>

        
     
  )
}

export default App