import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: 8px 16px 8px 16px;
  background-color: #daf2ec;
  border: none;
  border-radius: 4px;
  color: #07a46c;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  position: relative;

  &:hover {
    background-color: #aaf0df;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  background-color: #daf2ec;
  border: 1px solid #ddd;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #07a46c;
  font-weight: 600;
  background-color: #daf2ec;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: #aaf0df;
  }
`;

export const Icon = styled.span`
  margin-left: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;
