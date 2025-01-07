import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout';

createInertiaApp({
    title: name => name ? `${name} - INERTIA COBA` : 'INERTIA COBA',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        const page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => (<Layout children={page} />))
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})