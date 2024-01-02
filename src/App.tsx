import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import {Spinner} from 'reactstrap'

const Page = lazy(() => import("./Pages/Home/Page"))
const App = () => {

  
  return (
    
    <Routes>
      <Route path="*" element={<Suspense fallback={<Spinner/>}> <div>Not Found Page</div> </Suspense>} />
      <Route path="/" element={<Suspense fallback={<Spinner/>}> <Page /></Suspense>} />

    </Routes>

        
     
  )
}

export default App