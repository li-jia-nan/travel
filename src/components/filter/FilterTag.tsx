import React, { useState } from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;

interface PropsType {
  onSelect?: () => void;
}

export const FilterTag: React.FC<PropsType> = props => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return <CheckableTag {...props} checked={checked} onChange={handleChange} />;
};
