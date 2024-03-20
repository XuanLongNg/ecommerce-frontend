import styled from 'styled-components';
import { Footer } from 'antd/es/layout/layout';
import { colors } from '@/common/configs/colors.config';

const FooterStyle = styled(Footer)`
    background-color: ${colors.mainColor};
    height: 10vh;

    .logo {
        font-weight: 500;
        color: white;
        letter-spacing: 8px;
        text-transform: uppercase;
        font-size: 23px;
    }

    .search {
        padding: 15px;
        height: 10vh;

        .select {
            height: auto;
        }

        .ant-input-affix-wrapper {
            border: none;
            //border-left: 1px solid gray;
        }

        button {
            background-color: black;
            transition: all 0.5s ease;

            &:hover {
                background-color: white;
            }
        }
    }

    svg {
        transition: all 0.5s ease;
        font-size: 25px;
        color: white;
    }

    p {
        color: white;
    }

    .common-btn {
        width: 5em;
        transition: all 0.5s ease;

        &:hover {
            cursor: pointer;

            p {
                color: black;
            }

            svg {
                color: black;
            }
        }

        p {
            transition: all 0.5s ease;
            line-height: 1em;
            margin: 0;
        }
    }
`;

export { FooterStyle };
