'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const WebProyect = () => {
    const a = useSearchParams()
    console.log(a.get("url"));
    

  return (
    <div>{}</div>
  )
}

export default WebProyect