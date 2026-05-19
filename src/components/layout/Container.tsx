import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: Props) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>{children}</div>
  )
}
