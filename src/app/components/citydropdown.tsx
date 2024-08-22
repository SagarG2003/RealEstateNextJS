"use client"
import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

type CityOption = {
  value: string;
  label: string;
};

const cities: CityOption[] = [
  { value: 'New Delhi', label: 'New Delhi' },
  { value: 'Gurgaon', label: 'Gurgaon' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Chandigarh', label: 'Chandigarh'}
];

function CityDropdown() {
  const [selectedCity, setSelectedCity] = useState<SingleValue<CityOption>>(null);

  const handleChange = (selectedOption: SingleValue<CityOption>) => {
    setSelectedCity(selectedOption);
  };

  return (
    <Select
      className='w-96 container mx-auto mt-8 text-center border-2 border-black'
      value={selectedCity}
      onChange={handleChange}
      options={cities}
      placeholder="Delhi NCR"
    />
  );
}

export default CityDropdown;
