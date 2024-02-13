import { useEffect, useState } from 'react';
import axios from 'axios';

export function Home() {
    const [hello, setHello] = useState('');
    useEffect(() => {
        const get = async () => {
            const { data } = await axios.get('http://localhost:4000/api/auth/sign-up');
            setHello(data.message as string);
        };
        get()
            .then(() => {})
            .catch((e: any) => {
                console.log(e);
            });
    });
    return <div>{hello}</div>;
}
