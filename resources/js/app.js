import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { Head, Link } from "@inertiajs/inertia-vue3";
import InputError from '@/Components/InputError.vue';
import StringHelpers from './Mixins/StringHelpers'
import ButtonHelpers from './Mixins/ButtonHelpers';

// toastr
import toastr from 'toastr';
// toastr.options.progressBar = true;
toastr.options.closeButton = true;
window.toastr = toastr;

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const inertiaApp = createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        const vApp = createApp({ render: () => h(app, props) })

        vApp.use(plugin)
        vApp.use(ZiggyVue)
        vApp.mixin(...[StringHelpers, ButtonHelpers])
        vApp.component('Link', Link)
        vApp.component('Head', Head)
        vApp.component('IError', InputError)

        vApp.mount(el);
        return vApp;
    },
});

// link progress indicator
InertiaProgress.init({ color: '#5f63f2', showSpinner: true });
