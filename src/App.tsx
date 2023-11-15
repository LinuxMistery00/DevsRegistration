// App.tsx

import React from 'react';
import Devs from './components/devs/devs';

const App: React.FC = () => {
  // Assuming you have some initial data for ormData
  const initialFormData = {
    locacao: 'Some Location',
    level: 'Some Level',
    experience: 'Some Experience',
  };

  return (
    <div>
      <Devs initialFormData={initialFormData} />
    </div>
  );
};

export default App;
