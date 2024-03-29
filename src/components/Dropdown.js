import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = e => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(currentIsOpen => !currentIsOpen);
  };

  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map(option => (
    <div
      className='hover:bg-sky-100 rounded cursor-pointer p-1'
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div className='w-48 relative' ref={divEl}>
      <Panel
        className='flex justify-between items-center cursor-pointer '
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
