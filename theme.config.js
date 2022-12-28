import { theme as AntTheme } from 'antd';

export const theme = {
    ...AntTheme,
    wireframe: true,
    token: {
        Button: {
            colorError: '#ff92A5',
            colorPrimary: '#8d57a0',
            colorPrimaryHover: '#774289',
            colorPrimaryActive: '#8D57A0',
            colorBgContainerDisabled: '#D3D3D3',
            colorTextDisabled: '#fff',
            borderRadius: 2,
            controlOutline: '#f4f4f4',
        },
    },
};
