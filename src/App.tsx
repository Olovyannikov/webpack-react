import { ConfigProvider } from 'antd';
import { theme } from '../theme.config';

const App = () => {
    return <ConfigProvider theme={theme}></ConfigProvider>;
};

export default App;
