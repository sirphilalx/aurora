import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="font-bold">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 font-thin">{content}</div>}
    </div>
  );
};

export default Accordion;
