'use client'
import { useState } from "react";
import Input from "./components/input";


export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e)
  };

  return (
    <div>
      <form>
        <Input
          value={inputValue}
          placeholder="Escribe algo"
          onChange={handleInputChange}
        />
      </form>
      <p>You typed: {inputValue}</p>
    </div>
  );
}