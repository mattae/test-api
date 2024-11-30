// @ts-ignore
import Tutorials from '../../assets/mocks/tutorials.json';

export const urls = [
    {
        url: '/api/es/tutorials/1',
        json: Tutorials.find((t:any) => t.id === 1),
        active: true
    },
    {
        url: '/api/es/tutorials/2',
        json: Tutorials.find((t:any) => t.id === 2),
        active: true
    },
    {
        url: '/api/es/tutorials/3',
        json: Tutorials.find((t:any) => t.id === 3),
        active: true
    },
    {
        url: '/api/es/tutorials/4',
        json: Tutorials.find((t:any) => t.id === 4),
        active: true
    },
    {
        url: '/api/es/tutorials/5',
        json: Tutorials.find((t:any) => t.id === 5),
        active: true
    },
    {
        url: '/api/es/tutorials',
        json: Tutorials,
        active: true
    }
];
