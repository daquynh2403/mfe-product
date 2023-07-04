import React, {useEffect, useState} from "react";
import "./index.css"
import axios from "axios";

// const logIn = async () => {
//   const config = {
//     httpOnly: true,
//     headers: {
//       Authorization: `Bearer h69S0Kv-6xTs47fypmQw1qP7NTm6ecuBv7-pBrtSRJG-nQroFuDBwUKGlApbOpeufhvCdThsg4Q_6Z8vIEhrYw`,
//     }
//   }
//   const getSessionToken = async () => {
//     const res = await axios.get('http://localhost:8080/auth/svc/jwt?_siteId=brand', config)
//     return res.data
//   }
//   const result = await getSessionToken()
//   return result.item.sessionKey
// }

export const App = () => {
  const [prod, setProd] = useState()
  
  const fetch = async () => {
    const config = {
      auth: {
        username: 'kminchelle',
        password: '0lelplR'
      }
    }
    await axios.get('https://dummyjson.com/products', config).then(res => setProd(res.data)).catch(console.log)
    return
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Total: {prod?.total}</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {prod?.products.map((product) => (
                <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt="Products"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full border border-gray-100"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 mb-1 text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm font-medium text-gray-900 bg-gray-200 p-1 w-fit">{product.brand}</p>
                  </div>
                  <p className="text-sm font-medium text-red-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};
export default App;