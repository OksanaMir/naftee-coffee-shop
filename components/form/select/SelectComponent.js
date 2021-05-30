import {Select} from 'antd';
import 'antd/dist/antd.css';

export function SelectComponent({ options, handleChange, id }) {
  const { Option } = Select;
  return (
      <Select
        style={{ width: 220 }}
        getPopupContainer={() => document.getElementById(id)}
        onChange={handleChange && handleChange}
        defaultValue={options[0]}
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
