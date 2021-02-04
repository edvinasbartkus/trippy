import React from 'react'
import styled from 'styled-components/native'

export type SplitViewProps = {
  children: React.ReactNode[];
}

export function SplitView ({ children }: SplitViewProps) {
  const [child1, child2] = children;
  return <Container>
    <Left>{child1}</Left>
    <Right>{child2}</Right>
  </Container>
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`

const Left = styled.View`
  width: 50%;
`

const Right = styled.View`
  width: 50%;
  overflow-y: scroll;
  background: rgba(245,245,245,1) 0%, rgba(216,216,216,1) 100%);
`
