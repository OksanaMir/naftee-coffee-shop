import { Select } from 'antd';
import 'antd/dist/antd.css';
import styles from '../../../styles/SelectComponent.module.scss';

export function SelectComponent(props) {
  const { options, handleChange } = props;
  const { Option } = Select;
  console.log(options, 'options');
  return (
    <div id={'area'} className={styles.selectContainer}>
      <Select
        placeholder="Select"
        style={{ width: 220 }}
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
}
