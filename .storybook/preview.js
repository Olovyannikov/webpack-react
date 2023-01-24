import { ConfigProvider } from 'antd';
import { theme } from '../theme.config';
import '../src/assets/styles/index.css';
import ruRu from 'antd/locale/ru_RU';
export const decorators = [
    (Story) => (
        <ConfigProvider locale={ruRu} theme={theme}>
            <Story />
        </ConfigProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
