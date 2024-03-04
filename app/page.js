"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [categoryList,setCategoryList] = useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
      console.log(resp.categories)
    })
  }
  return (
    <div>
      <Hero/> 
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
