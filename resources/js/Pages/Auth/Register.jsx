import { useForm } from '@inertiajs/react'
import React from 'react'
import GuestLayout from '../../Layout/GuestLayout'

export default function Register() {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const handleChange = (e) => {
        setData(e.target.id, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('doRegister'), {
            data: data,
            onError: errors => reset('password', 'password_confirmation'),
        })
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 shadow-sm rounded">
                        <div className="card-body">
                            <h2>Halaman Register</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Nama</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name && 'is-invalid'}`}
                                        id="name"
                                        value={data.name}
                                        placeholder="Masukkan Nama"
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className="alert alert-danger mt-2">{errors.name}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email && 'is-invalid'}`}
                                        id="email"
                                        value={data.email}
                                        placeholder="Masukkan Email"
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className="alert alert-danger mt-2">{errors.email}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password && 'is-invalid'}`}
                                        id="password"
                                        value={data.password}
                                        placeholder="Masukkan Password"
                                        onChange={handleChange}
                                    />
                                    {errors.password && <div className="alert alert-danger mt-2">{errors.password}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Konfirmasi Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password_confirmation && 'is-invalid'}`}
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Masukkan Password Konfirmasi"
                                        onChange={handleChange}
                                    />
                                    {errors.password_confirmation && <div className="alert alert-danger mt-2">{errors.password_confirmation}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Register.layout = page => <GuestLayout children={page} />