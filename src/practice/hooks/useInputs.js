import { useState } from 'react';

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setForm(initialForm);
  };
  return [form, onChange, reset];
};

export default useInputs;
