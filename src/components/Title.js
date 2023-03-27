import React from 'react'

export default function Title({title}) {
  return (
    <div>
      <h1 className={'title text_center'}>{!title ? "Title" : title}</h1>
    </div>
  )
}
