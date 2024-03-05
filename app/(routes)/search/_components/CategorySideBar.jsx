"use client"

import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CategorySideBar = () => {
    const [categoryList,setCategoryList] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState([]);
    const params = usePathname();
    params.split('/')[2];
    useEffect(()=>{
    getCategoryList();
  },[])

  useEffect(()=>{
   params&&setSelectedCategory(params.split('/')[2])
  },[params])

  // get all category list
  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
      console.log(resp.categories)
    })
  }
  return (
    <div>
      <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
      <div>
        {categoryList.map((category,index)=>(
          <Link href={'/search/'+category.name} key={index} className={`flex gap-5 p-3 items-center border rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-purple-50 hover:shadow-md hover:text-primary hover:border-primary ${selectedCategory==category.name && 'border-primary text-primary shadow-md bg-purple-50'}`}>
            {category.icon.map((icon, iconIndex) => (
            <Image key={iconIndex} alt="icon" width={35} height={35} src={icon.url} />
            ))}
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategorySideBar