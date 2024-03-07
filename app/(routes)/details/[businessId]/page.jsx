"use client"

import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

const BusinessDetail = ({params}) => {
    const { data, status } = useSession();
    const [business,setBusiness] = useState([]);    

    useEffect(()=>{
       params&&getBusinessById();
    },[params]);

    useEffect(()=>{
      checkUserAuth();
    },[]);

    const checkUserAuth=()=>{
        if(status == 'loading')
        {
            return <p>Loading...</p>
        }
        if(status=='unauthenticated'){
            signIn('descope');
        }
    }

    const getBusinessById=()=>{
        GlobalApi.getBusinessById(params.businessId).then(resp=>{
            console.log(resp);
            setBusiness(resp.businessList);
        })
    }

    return status=='authenticated' &&business&& (
        <div className='py-8 md:py-20 px-10 md:'>
            <BusinessInfo business={business} />
            <div className='grid grid-cols-3 mt-10'>
                <div className='md:col-span-2 col-span-3 order-last md:order-first'><BusinessDescription business={business} /></div>
                <div className=''><SuggestedBusinessList business={business} /></div>
            </div>
        </div>
    )
}

export default BusinessDetail