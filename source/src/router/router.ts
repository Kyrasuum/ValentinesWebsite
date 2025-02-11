import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/:catchAll(.*)*',
        name: "valentines",
        component: () => import('/src/pages/valentines.vue'),
        meta: {
            requiresAuth: false,
            level: 0
        }
    },
];

export default routes;
