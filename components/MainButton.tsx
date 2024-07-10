import { Button, ButtonProps } from 'antd'
import React from 'react'

export default function MainButton({children,...props}: {
  children: React.ReactNode
} & ButtonProps) {
  return (
    <Button
      style={{
        //渐变色背景
        background: 'linear-gradient(to right, #A5FF6D, #32F799)',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
