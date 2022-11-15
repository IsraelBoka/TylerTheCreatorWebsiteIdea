import Link from 'next/link'
import React from 'react'

function apitest({makeup}) {
  return (
    <div>
        <div className=''>Test</div>
      {makeup.map(make => (
        <ul key={make.id}>
            <Link className=""href={`${make.product_link}`}>
                <a className='text-red-500 underline hover:text-red-800'>{make.name} </a>
            </Link>
        </ul>
      ))}

    </div>
  )
}
export async function getServerSideProps(){
   const req = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
   const makeup = await req.json()
    return{
        props:{
            makeup,
        }
    }
}
export default apitest

