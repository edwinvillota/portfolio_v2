import React from 'react';
import { Container, AnimatedWrapper } from './AnimatedListStyles';

type AnimatedList = {
  children: React.ReactNode[];
  showItems: boolean;
};

const AnimatedList: React.FC<AnimatedList> = ({ children, showItems }) => {
  const WrappedChildrens = children.map((child, i) => (
    <AnimatedWrapper itemIndex={i} itemsLength={children.length} isVisible={showItems} key={i}>
      {child}
    </AnimatedWrapper>
  ));

  return <Container>{WrappedChildrens}</Container>;
};

export default AnimatedList;
