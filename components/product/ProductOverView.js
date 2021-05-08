import Link from 'next/link';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import styles from '../../styles/LandingPageAboutUs.module.scss';

export function ProductOverView() {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <article className={styles.landingAboutUsContainer}>
      <div>
        <p>Nicaragua La Bendicion</p>
        <img src="/assets/teamPicFinal.png"></img>
      </div>
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </article>
  );
}
