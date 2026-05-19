import React from 'react'

type Props = {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function Section({ children, id, className = '' }: Props) {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      {children}
    </section>
  )
}
