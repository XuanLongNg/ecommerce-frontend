import '@/App.css';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from '@/routes/app.route';
import type { ReactElement } from 'react';
import type { RouteObject } from 'react-router/dist/lib/context';

function App(): ReactElement | null {
    return useRoutes(appRoutes as RouteObject[]);
}

export default App;
