import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FilterButtonContainer, Button, Icon, DropdownList, DropdownItem } from './styles';

interface FilterButtonProps {
  label: string;
  options: string[];
  onOptionClick?: (option: string) => void;
}

export function FilterButton({ label, options = [], onOptionClick }: Readonly<FilterButtonProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (onOptionClick) {
      onOptionClick(option);
    }
    setIsOpen(false);
  };

  const resetFilter = () => {
    setSelectedOption(null);
    if (onOptionClick) {
      onOptionClick('');
    }
    setIsOpen(false);
  };

  return (
    <FilterButtonContainer ref={dropdownRef}>
      <Button onClick={toggleDropdown}>
        {selectedOption ?? label}
        <Icon>
          <FaChevronDown />
        </Icon>
      </Button>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownItem>
          ))}
          <DropdownItem onClick={resetFilter}>
            Resetar
          </DropdownItem>
        </DropdownList>
      )}
    </FilterButtonContainer>
  );
}
