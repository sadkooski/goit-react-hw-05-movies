import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(to);
  };

  return <button onClick={handleGoBack}>Go back</button>;
};
