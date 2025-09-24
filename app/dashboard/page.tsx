import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()
  if (!isAuthenticated) {
    redirect('/sign-in')
  }
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>{' '}
      <p className="mb-5">Welcome to Dashboard.</p>{' '}
      <div className="mb-5">
        <p>서버측에서 auth, currentUser 함수 이용</p>
        <p>Welcome, {user?.firstName}!</p>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        <p>사용자 등록: {user?.createdAt}</p>
      </div>
    </div>
  )
}
