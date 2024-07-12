import React from 'react'
import useAuth from '../hooks/useAuth'

export default function Init({children }: {
  children?: React.ReactNode
}) {

  useAuth()
  return (
    <>
      {children}
    </>
  )
}
