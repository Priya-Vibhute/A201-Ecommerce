import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'

function Product() {
  let [products, setProducts] = useState([])

  useEffect(() => {

    getProducts().then(data => {
      setProducts(data);
    })

  }, [])
// To refresh all product when you add product
  const refreshProducts=()=>{
    getProducts().then(data=>{
       setProducts(data);    
    })
  }
// To set selected Product
const handleSelectProduct=(selectedProduct)=>{}


  return (
    <div>
      <div class="container mt-3">
        <div class="row">

          <div class="col">
            {/*ProductForm Start */}
            <ProductForm onAddProduct={refreshProducts} />
            {/*ProductForm End */}
          </div>


          <div class="col">
            {/* Displaying Products :Start */}
            <div class="row row-cols-1 row-cols-md-2 g-4">

              {products.map((p) => {
                return (
                  <ProductItem
                    productName={p.productName}
                    productDescription={p.productDescription}
                    productPrice={p.productprice}
                    product_link={p._links.self.href}
                    onSelectProduct={handleSelectProduct}
                  />
                )
              })}
            </div>
            {/* Displaying Products :End */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product