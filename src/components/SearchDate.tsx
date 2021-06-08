import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HeadLine } from '../styles/GlobalStyles'

type Props = {
  Yes: string
  No: string
}

export const SearchDate: React.FC<Props> = ({ Yes, No }) => {
  const [isFounded, setIsFounded] = useState<boolean | null>(null)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    // monitoring date in real time
    const timeout = setTimeout(() => {
      setDate(new Date())

      // if it's Jun 1, set 'isFounded' to true
      if (date.getMonth() === 5 && date.getDate() === 1) {
        setIsFounded(true)
      } else {
        setIsFounded(false)
      }
    }, 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [date])

  return (
    <Section>
      <HeadLine>{isFounded ? Yes : No}</HeadLine>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 150px;
`
