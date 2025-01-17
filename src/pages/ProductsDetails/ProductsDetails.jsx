import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';
import "./ProductsDetails.css";
import NavBar from '../../components/NavBar/NavBar';
export default function ProductsDetails() {
  const params = useParams();
  const { productDetails, loading, setProductDetails, setLoading,handleAddToCart,cardItems } = useContext(ShoppingCartContext);
  const { id } = params;
  function handleGoToCart(productDetails){
    handleAddToCart(productDetails);
  }
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  // console.log(productDetails);

  return (
    <>
    <NavBar />
      <div className='product-card'>
          <div className='product-image'>
          {productDetails?.thumbnail ? (
            <img src={productDetails.thumbnail} alt={productDetails.title} />
          ) : (
            <p>Image not available</p>
          )}
          </div>
          <div className='product-details'>
            <h1 className='title'>{productDetails?.title}</h1>
            <p className='description'>{productDetails?.description}</p>
            <p className='price'>
              <span>${(productDetails?.price - (productDetails?.price * productDetails?.discountPercentage / 100)).toFixed(2)} </span>
              <span style={{ color: 'gray', textDecoration: 'line-through', marginRight: '10px' }}>${productDetails?.price} </span>
              <span style={{ color: 'red', marginLeft: '10px' }}>{productDetails?.discountPercentage}% off</span>
            </p>
            <p className='rating'>Rating: {productDetails?.rating}⭐</p>   
            <div className='button'>
                <button className='btn'
                disabled={cardItems?.findIndex((item) => item.id === productDetails?.id) > -1}
                 onClick={() => handleAddToCart(productDetails)}  >Add To Cart</button>
            </div> 
          </div>
      </div>
      <div className="product-info">
          <h1>Product Overview</h1>
          <div>
            <p><span>Type:</span> 
              <span className="tags">
                {productDetails?.tags.map((ty, index) => <span key={index}>{ty}</span>)}
              </span>
            </p>
            <p><span>Brand:</span> {productDetails?.brand}</p>
            <p><span>Stock:</span> {productDetails?.stock}</p>
            <p><span>Category:</span> {productDetails?.category}</p>
            <p><span>Warranty:</span> {productDetails?.warrantyInformation}</p>
            <p><span>Weight:</span> {productDetails?.weight}</p>
          </div>

      </div>
      <div className='product-review'>
        <h1>Ratings & Reviews</h1>
        {
          productDetails?.reviews.map((review, index) => (
            <div key={index}>
              <p>{review?.rating}⭐{review?.comment}</p>
              <h3>{review?.reviewerName}</h3>
            </div>
          ))
        }
      </div>
      <div>
      </div>
    </>
  )
}
