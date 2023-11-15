import React, { useState, ChangeEvent } from 'react';
import './styles.css'

interface FormProps {
  onChange: (newFormData: { locacao: string; level: string; experience: string }) => void;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ onChange, onSubmit }) => {
  const [locacaoValue, setLocacaoValue] = useState('');
  const [levelValue, setLevelValue] = useState('');
  const [experienceValue, setExperienceValue] = useState('');

  const handleLocacaoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocacaoValue(event.target.value);
    onChange({ locacao: event.target.value, level: levelValue, experience: experienceValue });
  };

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLevelValue(event.target.value);
    onChange({ locacao: locacaoValue, level: event.target.value, experience: experienceValue });
  };

  const handleExperienceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setExperienceValue(event.target.value);
    onChange({ locacao: locacaoValue, level: levelValue, experience: event.target.value });
  };

  return (
    <div className="Form">
      <select name="locacao" id="Locacao" value={locacaoValue} onChange={handleLocacaoChange}>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Fullstack">Fullstack</option>
      </select>
      <select name="level" id="Level" value={levelValue} onChange={handleLevelChange}>
        <option value="Estagiario">Estagiário</option>
        <option value="Junior">Junior</option>
        <option value="Pleno">Pleno</option>
        <option value="Senior">Sênior</option>
      </select>
      <select name="experience" id="Experience" value={experienceValue} onChange={handleExperienceChange}>
        <option value="1 ano">1 ano</option>
        <option value="3 anos">3 anos</option>
        <option value="5 anos">5 anos</option>
        <option value="+10 anos">+10 anos</option>
      </select>
      <button onClick={onSubmit}>Adicionar Dev</button>
    </div>
  );
};

export default Form;
