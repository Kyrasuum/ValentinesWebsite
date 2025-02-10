import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: import.meta.env.VITE_ASSET_URL + '/valentines/:catchAll(.*)*',
        name: "valentines",
        component: () => import('/src/pages/valentines.vue'),
        meta: {
            requiresAuth: false,
            level: 0
        }
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        name: "redirect",
        component: () => import('/src/pages/redirect.vue'),
        meta: {
            requiresAuth: false,
            level: 0
        }
    },
];

export default routes;
