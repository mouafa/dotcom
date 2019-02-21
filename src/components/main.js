import React from 'react'

export default function Main({ children }) {
  return (
    <main
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      {children}
    </main>
  )
}
