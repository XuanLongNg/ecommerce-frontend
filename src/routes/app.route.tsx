import { SignUp } from '@/components/sign_up/sign-up';
import type { RouteObject } from 'react-router/dist/lib/context';
import { Home } from '@/components/home/home';

export const appRoutes: RouteObject[] = [
    {
        path: '/auth/sign-up',
        element: <SignUp />,
    },
    {
        path: '/',
        element: <Home />,
    },
] as RouteObject[];
