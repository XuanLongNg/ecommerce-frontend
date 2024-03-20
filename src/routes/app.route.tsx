import { SignUp } from '@/components/sign_up/sign-up';
import type { RouteObject } from 'react-router/dist/lib/context';
import { Home } from '@/components/home/home';
import { AppLayout } from '@/layouts/app/App';
import type { ReactNode } from 'react';

export interface IRoute {
    layout?: ReactNode;
}

export const appRoutes: IRoute & RouteObject[] = [
    {
        path: '/auth/sign-up',
        element: <SignUp />,
    },
    {
        path: '/',
        element: <Home />,
        layout: <AppLayout />,
    },
] as RouteObject[];
