import ProductContainer from '../ProductContainer';
import s from './style.module.css';

function App() {
  return (
    <div className={s.App}>
      <div className={s.appHeader}>
        <ProductContainer/>
      </div>
    </div>
  );
}

export default App;
