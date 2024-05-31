import {useState} from 'react';
import ocean from '../images/ocean.jpg';
import code from '../images/code.jpg';
import postgres from '../images/postgres.jpg';
import tree from '../images/tree.jpg';
import * as styles from '../styles/App.module.css';

export default function App() {
  const [photo, setPhoto] = useState<string>(ocean);

  const switchPhoto = () => {
    if (photo === ocean) {
      setPhoto(code);
    } else if (photo === code) {
      setPhoto(postgres);
    } else if (photo === postgres) {
      setPhoto(tree);
    } else if (photo === tree) {
      setPhoto(ocean);
    }
  };

  return (
    <div className='center'>
      <h1 className={styles.cursive}>Photo Switcher</h1>
      <div>
        <img src={photo} />
      </div>
      <button onClick={switchPhoto}>Switch</button>
    </div>
  );
}