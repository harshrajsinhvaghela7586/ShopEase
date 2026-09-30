import React from 'react'

async function page({params}) {
    const { id } = await params;
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-2">Product Details</h1>
      <p className="text-gray-600">You are viewing product ID: <span className="font-bold text-blue-600">{id}</span></p>
    </div>
  )
}

export default page
