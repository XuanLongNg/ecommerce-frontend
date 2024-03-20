'use client';
import { Select } from 'antd';
import {
    HeartOutlined,
    MessageOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    AudioOutlined,
} from '@ant-design/icons';
import { FooterStyle } from '@/components/footer/footer.style';

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const FooterComponent = () => {
    return <FooterStyle></FooterStyle>;
};
export { FooterComponent };
