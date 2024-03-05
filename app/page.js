"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList,setCategoryList] = useState([]);
  const [businessList,setBusinessList] = useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[])

  // get all category list
  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
      // console.log(resp.categories)
    })
  }

  // get all business list

  const getAllBusinessList=()=>{
   GlobalApi.getAllBusinessList().then(resp=>{
    setBusinessList(resp.businessLists);
    // console.log(resp.businessLists);
   })
  }

  return (
    <div>
      <Hero/> 
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={'Popular Business'} />
    </div>
  );
}
