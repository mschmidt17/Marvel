import React from 'react';
import { Container, Progress } from './Loading.styled';

interface LoadingProps {
  loading: boolean;
  duration?: number;
}

const Loading: React.FC<LoadingProps> = ({ loading, duration = 2000 }) => {
  return (
    <Container data-testid="loading">
      <Progress data-testid="progress" $duration={duration} $loading={loading} />
    </Container>
  );
};

export default Loading;
