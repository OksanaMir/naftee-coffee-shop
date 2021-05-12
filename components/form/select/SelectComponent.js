import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import styles from '../../../styles/SelectComponent.module.scss';
=======
>>>>>>> DatoCMS connected and landing page continued
export const SelectComponent = (props) => {
  const { options, handleChange } = props;
  const { Option } = Select;
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> DatoCMS connected and landing page continued
  );
};
