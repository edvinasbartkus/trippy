import React from 'react'
import styled from 'styled-components/native';
import { SplitViewProps } from './index.web';

export function SplitView ({ children }: SplitViewProps) {
  const [child1, child2] = children;
  return <Container>
    <Left>{child1}</Left>
    <Right>{child2}</Right>
  </Container>
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`

const Left = styled.View`
  width: 100%;
  height: 70%;
`

const Right = styled.View`
  width: 100%;
  height: 30%;
`
