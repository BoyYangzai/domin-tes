'use client'
import React from 'react'
import Chat from '../../../../components/Chat'
import { useSearchParams } from 'next/navigation'

export default function ChatPage() {
  const roleId = useSearchParams().get('roleId')
  return (
    <div><Chat classId={Number(roleId)}></Chat></div>
  )
}
