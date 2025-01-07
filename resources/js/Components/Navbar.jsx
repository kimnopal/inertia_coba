import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Posts',
        href: '/posts'
    },
]

export default function Navbar() {
    const { url, props: { auth } } = usePage()

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">Laravel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link className={`nav-link ${link === url ? 'active' : ''}`} href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex">
                        {auth && <Link href={route('logout')} className='btn btn-outline-light btn-danger' as='button' method='delete'>Logout</Link>}
                    </div>
                </div>
            </div>
        </nav >
    )
}
