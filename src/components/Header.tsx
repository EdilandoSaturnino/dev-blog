import { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface IHeaderProps {
  onSearch: any;
}

export function Header({ onSearch }: IHeaderProps) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e: any) {
    const value = e.target.value;

    setInputValue(value);
    onSearch(value);
  }

  return (
    <div className="bg-dark-20">
      <header className="flex items-center flex-col py-10 mx-auto max-w-screen-2lg gap-4 px-6">
        <h1 className="block text-dark-60 text-4xl font-medium">
          <span className="text-primary">DEV</span>BLOG
        </h1>
        <div className="relative block w-full">
          <BiSearch
            className="absolute top-3 left-3 text-primary pointer-events-none"
            size={20}
          />
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            placeholder="Pesquisar no blog"
            className="p-2 pl-10 text-dark-50 bg-dark-30 border rounded-md focus:outline-none border-dark-40 w-full focus:border-primary"
          />
        </div>
      </header>
    </div>
  );
}
