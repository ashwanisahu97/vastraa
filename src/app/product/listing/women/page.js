'use client'
import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";
import { useEffect, useState } from "react";

export default  function WomenAllProducts() {
  const [getAllProducts,setGetAllProducts] = useState({})
  const handleGetAllProducts = async()=>{
    let res = await productByCategory("women");
    setGetAllProducts(res);
  }
  useEffect(()=>{
    handleGetAllProducts();
  },[])
 
  console.log("getAllProducts",getAllProducts);

  return <CommonListing data={getAllProducts && getAllProducts?.data} />;
}
