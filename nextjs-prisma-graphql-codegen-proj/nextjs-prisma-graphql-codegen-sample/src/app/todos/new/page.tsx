// app/todos/new/page.tsx

'use client'

import { useState } from 'react'

export default function Page() {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>New Todo</h1>
      <form
        onSubmit={() => {
          alert('Submitted!')
        }}
      >
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <input type="submit" />
      </form>
    </>
  )
}
