import { type FC, type ReactNode } from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from '@/components/header/Header';
import { Content, Footer } from 'antd/es/layout/layout';

export interface IBaseLayoutProps {
    children?: ReactNode;
}
const AppLayout: FC<IBaseLayoutProps> = ({ children }) => {
    return (
        <Layout>
            <HeaderComponent />
            <Content>{children}</Content>
            <Footer />
        </Layout>
    );
};
export { AppLayout };
