import React from 'react';
import { Container, Progress } from './Loading.styled';

interface LoadingBarProps {
  loading: boolean;
  duration?: number;
}

const Loading: React.FC<LoadingBarProps> = ({ loading, duration = 2000 }) => {
  return (
    <Container data-testid="loading">
      <Progress data-testid="progress" $duration={duration} $loading={loading} />
    </Container>
  );
};

export default Loading;
