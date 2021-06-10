import React from 'react'
import styled from 'styled-components'
import { color, fontSize } from '../../styles/Utils'

export type Props = {
  isJapan: boolean
}

export const Footer: React.FC<Props> = ({ isJapan }) => {
  return (
    <footer>
      {isJapan ? (
        <Small>
          <LinkTo href="https://www.wakayama-u.ac.jp/">和歌山大学</LinkTo>
          についてもっと学ぶ
        </Small>
      ) : (
        <Small>
          More learn about&#8201;
          <LinkTo href="http://www.wakayama-u.ac.jp/en/">
            Wakayama University
          </LinkTo>
        </Small>
      )}
    </footer>
  )
}

const Small = styled.small`
  font-size: ${fontSize.textBase};
  color: ${color.textDefault};
  text-align: center;
  display: block;
  margin-top: 150px;

  @media screen and (min-width: 450px) {
    margin-top: 200px;
  }
`

const LinkTo = styled.a`
  color: ${color.textAccent};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`
