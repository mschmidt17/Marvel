import React from 'react';
import { Container, Progress } from './Loading.styled';

interface LoadingBarProps {
  duration?: number;
}

const Loading: React.FC<LoadingBarProps> = ({ duration = 2000 }) => {
  return (
    <Container data-testid="loading">
      <Progress data-testid="progress" $duration={duration} />
    </Container>
  );
};

export default Loading;
