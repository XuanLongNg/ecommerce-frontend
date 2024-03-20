'use client';
import { Select } from 'antd';
import {
    HeartOutlined,
    MessageOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    AudioOutlined,
} from '@ant-design/icons';
import Compact from 'antd/es/space/Compact';
import { HeaderStyle } from '@/components/header/header.style';
import Search from 'antd/es/input/Search';

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const selectOptions = [
    {
        value: 'test1',
        lable: 'test1',
    },
    {
        value: 'test2',
        lable: 'test2',
    },
];

const HeaderComponent = () => {
    return (
        <HeaderStyle>
            <div className="d-flex flex-row justify-content-between">
                <div className="logo d-flex">Ecommerce</div>
                <div className="d-flex flex-row justify-content-between">
                    <Compact className="search">
                        <Select
                            className="select"
                            options={selectOptions}
                            value={selectOptions[0]}
                        />
                        <Search
                            placeholder="Search items"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            className="input"
                            // onSearch={onSearch}
                        />
                    </Compact>

                    <div
                        className="d-flex justify-content-center align-items-center flex-column common-btn"
                        onClick={() => {
                            window.location.href = '/cart';
                        }}
                    >
                        <ShoppingCartOutlined />
                        <p>Cart</p>
                    </div>
                    <div
                        className="d-flex justify-content-center align-items-center flex-column common-btn"
                        onClick={() => {
                            window.location.href = '/favorite';
                        }}
                    >
                        <HeartOutlined />
                        <p>Favorite</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column common-btn">
                        <MessageOutlined />
                        <p>Announce</p>
                    </div>
                    <div
                        className="d-flex flex-column justify-content-center align-items-center common-btn"
                        onClick={() => {
                            window.location.href = '/about/me';
                        }}
                    >
                        <UserOutlined />
                        <p>User</p>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    );
};
export { HeaderComponent };
