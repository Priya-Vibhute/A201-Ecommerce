import React from 'react'
import { addProduct } from '../../services/ProductService'

function ProductForm({onAddProduct}) {

    // Function to be called when form will be submitted
     
    const submitHandler=(e)=>{
       e.preventDefault();
       addProduct({
          productId:e.target.productId.value,
          productName:e.target.productName.value,
          productDescription:e.target.productDescription.value,
          productprice:e.target.productprice.value
       }).then(data=>{
        onAddProduct();
        return data;
       })

    }

    // ================================================

    return (
        <div className='container border border-primary border-3 p-3 my-3'>
            <form onSubmit={submitHandler}>
                <h1 className='bg-primary p-2 text-white text-center'>Add Product</h1>
                {/* Product Id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" name='productId' />
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productName' />
                </div>

                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productDescription' />
                </div>

                  {/* Product Price */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    
                    
                    name='productprice' />
                </div>

                  {/* Button to submit form  */}
                <button type="submit" className="btn btn-primary">Submit</button>
               

            </form>
        </div>
    )
}

export default ProductForm