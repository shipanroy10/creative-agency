import React, { useContext } from 'react';
import './Order.css'
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

import { UserContext } from '../../../../App';



const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = useParams();



  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    data.created = new Date();
    fetch('https://mighty-inlet-60591.herokuapp.com/userService', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('service created successfully')
        }
      })
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-6 col-sm-12">

          <div className="form-main">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="client" defaultValue={loggedInUser.name} placeholder="name" ref={register} />
              {errors.name && <span>This field is required</span>}

              <input name="email" defaultValue={loggedInUser.email} placeholder="your email" ref={register({ required: true })} />
              {errors.email && <span>This field is required</span>}

              <input name="name" defaultValue={name} ref={register({ required: true })} />
              {errors.service && <span>This field is required</span>}

              <input className="description" name="detail" placeholder="project detail" ref={register({ required: true })} />
              {errors.detail && <span>This field is required</span>}

              <input name="price" placeholder="price" type="text" ref={register({ required: true })} />
              {errors.price && <span>This field is required</span>}
              <br /> <br />
              <button type="submit" className="btn btn-dark">send</button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Order;