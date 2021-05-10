import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import styles from '../../../styles/SelectComponent.module.scss';
export const SelectComponent = (props) => {
  const { options, handleChange } = props;
  const { Option } = Select;
  return (
    <div id={'area'} className={styles.selectContainer}>
      <Select
        defaultValue={options[0]}
        style={{ width: 120 }}
        getPopupContainer={() => document.getElementById('area')}
        onChange={handleChange}
      >
        {options &&
          options.map((option) => {
            return <Option value={option}>{option}</Option>;
          })}
      </Select>
    </div>
  );
};
