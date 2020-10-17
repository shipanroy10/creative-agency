import React from 'react';
import './FooterMain.css'
const FooterMain = () => {
    return (
        <main className="container">


            <div className="row ">


                <div className="col-md-4">
                    <h3 style={{ marginTop: '30px' }} >Let us handle your project professionally</h3>
                    <p>with well written codes,we build amazing app for all platform's mobile and wen app in general</p>

                </div>

                <div className="col-md-6 ">



                    <form style={{ marginTop: '30px' }}>
                        <div class="form-group">

                            <input type="email" class="form-control" placeholder="your email address" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">

                            <input type="text" placeholder="your name/company name" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <input type="text" style={{ height: '200px' }} class="form-control" />


                        </div>
                        <button type="submit" class="btn btn-dark">Send</button>
                    </form>



                </div>

            </div>


        </main>
    );
};

export default FooterMain;