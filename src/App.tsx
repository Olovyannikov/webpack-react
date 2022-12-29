import { ConfigProvider } from 'antd';
import { theme } from '../theme.config';
import './assets/styles/index.css';

const App = () => {
    return <ConfigProvider theme={theme}></ConfigProvider>;
};

export default App;
