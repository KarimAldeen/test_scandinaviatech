import { BrowserRouter } from 'react-router-dom'
import { Tchildren } from './Layout/app/Types'

function ProviderContainer({children}:Tchildren) {
  return (
 <BrowserRouter basename='/'>
             {children}
</BrowserRouter>
    )
}

export default ProviderContainer