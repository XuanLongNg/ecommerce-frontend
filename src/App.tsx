import '@/App.css';
import { useRoutes } from 'react-router-dom';
import { appRoutes, type IRoute } from '@/routes/app.route';
import React, { type ReactElement, type ReactNode } from 'react';
import type { RouteObject } from 'react-router/dist/lib/context';
import styled from 'styled-components';

function wrapWithLayout(element: ReactNode, layout?: ReactNode): ReactNode {
    return layout ? React.cloneElement(layout as ReactElement, undefined, element) : element;
}

function App(): ReactElement | null {
    appRoutes.map((route: RouteObject & IRoute) => {
        const { layout } = route;
        route.element = wrapWithLayout(route.element, layout);
        delete route.layout;
        return route;
    });
    return <GlobalStyles>{useRoutes(appRoutes as RouteObject[])}</GlobalStyles>;
}

const GlobalStyles = styled('div')`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
`;

export default App;
