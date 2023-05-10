import React from 'react';

export const Login = () => {
    return (
        <div className="Login">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
            <h2 className="text-center mb-4">Login</h2>
            <form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}