import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
export const SelectComponent = (props) => {
  const { options, handleChange } = props;
  const { Option } = Select;
  return (
    <Select
      defaultValue={options[0]}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {options &&
        options.map((option) => {
          return <Option value={option}>{option}</Option>;
        })}
    </Select>
  );
};
