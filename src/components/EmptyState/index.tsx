import React from "react";
import { ContainerEmptyState } from "./EmptyState.styled";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "No results found" }) => {
  return <ContainerEmptyState>{message}</ContainerEmptyState>;
};

export default EmptyState;
