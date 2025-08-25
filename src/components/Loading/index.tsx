import React, { useEffect, useState } from "react";
import { Container, Progress } from "./Loading.styled";

interface LoadingBarProps {
  duration?: number;
}

const Loading: React.FC<LoadingBarProps> = ({ duration = 2000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);
      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  return (
    <Container data-testid="loading">
      <Progress data-testid="progress" style={{ width: `${progress}%` }} />
    </Container>
  );
};

export default Loading;
