import './styles.css'
import React, { useState } from 'react';
import DevCard from '../devcard/devcard';
import Form from '../form/form';

interface DevsProps {
  initialFormData: {
    locacao: string;
    level: string;
    experience: string;
  };
}

interface FormData {
  locacao: string;
  level: string;
  experience: string;
}

const Devs: React.FC<DevsProps> = ({ initialFormData }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [devList, setDevList] = useState<FormData[]>([]);

  const handleFormChange = (newFormData: FormData) => {
    setFormData(newFormData);
  };

  const handleDevAdd = () => {
    setDevList([...devList, formData]);
    setFormData(initialFormData);
  };

  return (
    <div>
    <div className='Devs'>
      <Form onChange={handleFormChange} onSubmit={handleDevAdd} />
    </div>
    <div className="DevsList">
      {devList.map((dev, index) => (
        <DevCard key={index} formData={dev} />
      ))}
    </div>
    </div>
  );
};

export default Devs;
