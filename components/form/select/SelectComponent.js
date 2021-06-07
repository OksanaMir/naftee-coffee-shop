import { Select } from 'antd';
import 'antd/dist/antd.css';

export function SelectComponent({ options, handleChange, id }) {
  const { Option } = Select;
  return (
    <Select
      style={{ width: 'max-content' }}
      getPopupContainer={() => document.getElementById(id)}
      onChange={handleChange && handleChange}
      defaultValue={options?.[1]}
    >
      {options &&
        options.map((option) => {
          return (
            <Option key={option} value={option}>
              {option}
            </Option>
          );
        })}
    </Select>
  );
}
