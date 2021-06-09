import React from 'react'
import { useState, useEffect } from 'react'
import { color, fontSize } from '../styles/Utils'
import styled from 'styled-components'

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

const HeadLine = styled.h1`
  color: ${color.textDefault};
  text-align: center;
  font-weight: 400;
  font-size: ${fontSize.textLg};

  @media screen and (min-width: 600px) {
    font-size: ${fontSize.textXl};
  }
  @media screen and (min-width: 1000px) {
    font-size: ${fontSize.text2Xl};
  }
`
