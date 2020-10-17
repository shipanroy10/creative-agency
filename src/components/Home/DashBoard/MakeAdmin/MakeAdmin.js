import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './MakeAdmin.css'
const MakeAdmin = () => {



    return (
        <section className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6">
                    <div className="form-main">
                        <form>


                            <label class="form-check-label" for="exampleCheck1">Email</label>
                            <input type="email" name="email" class="form-control" placeholder="enter your email" />
                            <br />
                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;