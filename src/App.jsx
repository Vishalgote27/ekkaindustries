import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const Publiclayout = React.lazy(() => import('./public/PublicLayout'));
const Hero = React.lazy(() => import('./public/componants/Hero'));
const About = React.lazy(() => import('./public/pages/About'));
const ProductDetails = React.lazy(() => import('./public/pages/ProductDetails'));
const Allproduct = React.lazy(() => import('./public/pages/Allproduct'));
const AllServices = React.lazy(() => import('./public/pages/AllServices'));
const Contact = React.lazy(() => import('./public/pages/Contact'));


const App = () => {
  return <>

    <BrowserRouter>
      <Suspense fallback={<div>
        <div className="flex flex-row space-x-4 justify-center mt-11 md:mt-48  ">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-black border-t-transparent">
          </div>
        </div>
      </div>}>
        <Routes>
          <Route path='/' element={<Publiclayout />}>
            <Route index element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/ProductDetails/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Allproduct />} />
            <Route path='/allServices' element={<AllServices />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>



  </>
}

export default App