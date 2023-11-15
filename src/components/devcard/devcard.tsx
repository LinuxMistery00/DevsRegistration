import './styles.css'
import React from 'react';

interface DevCardProps {
  formData: {
    locacao: string;
    level: string;
    experience: string;
  };
}

const DevCard: React.FC<DevCardProps> = ({ formData }) => {
  return (
    <div className='DevCard'>
      <p className='Location'>Locação: {formData.locacao}</p>
      <hr />
      <p className='Level'>Level: {formData.level}</p>
      <hr />
      <p className='Experience'>Experience: {formData.experience}</p>
    </div>
  );
};

export default DevCard;
