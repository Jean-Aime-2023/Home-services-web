import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = ({ categoryList }) => {
  return (
    <div className='mx-4 md:mx-22 mt-10 lg:mx-52 grid grid-cols-3 max-sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {categoryList.length>0?categoryList.map((category, index) => (
        <Link href={'/search/'+category.name} key={index} className={`flex flex-col items-center justify-center gap-2 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out`} style={{ backgroundColor: category.bgColor.hex }}>
          {category.icon.map((icon, iconIndex) => (
            <Image key={iconIndex} alt="icon" width={35} height={35} src={icon.url} />
          ))}
          <h2 className='text-primary'>{category.name}</h2>
        </Link>))
        :
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg'>

          </div>
      ))}
    </div>
  );
};

export default CategoryList;
