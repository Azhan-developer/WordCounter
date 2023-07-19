import React from 'react'

export default function Footer(props) {
  return (
    <div className="container py-5">
        <p className="text-center" style={{color: props.Modes==="dark"?"white":"black"}}>Copyright module 2023-2024 Developed by Azhan</p>
    </div>
  )
}
