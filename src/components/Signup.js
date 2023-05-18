import React from 'react';

export const Signup = () => {
    return (
        <div className="Signup">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}