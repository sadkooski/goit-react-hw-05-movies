import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>Go back</button>;
};

// function BackButton() {
//   const history = useHistory();

//   const handleGoBack = () => {
//     history.goBack(); // Wraca do poprzedniej strony w historii przeglądania
//   };

//   return (
//     <button onClick={handleGoBack}>Wróć</button>
//   );
// }
