import { ConfigProvider } from 'antd';
import { theme } from '../theme.config';
import './assets/styles/index.css';
import ruRu from 'antd/locale/ru_RU';

const App = () => {
    return <ConfigProvider theme={theme} locale={ruRu}></ConfigProvider>;
};

export default App;
