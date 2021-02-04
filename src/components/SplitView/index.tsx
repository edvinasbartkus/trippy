import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import { SplitViewProps } from "./index.web";
import { SheetBackground } from "../SheetBackground";

export function SplitView({ children }: SplitViewProps) {
  const [child1, child2] = children;

  // hooks
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <Container>
      <Left>{child1}</Left>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundComponent={SheetBackground}
      >
        <Right>{child2}</Right>
      </BottomSheet>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Left = styled.View`
  width: 100%;
  height: 100%;
`;

const Right = styled.View`
  flex: 1;
`;
