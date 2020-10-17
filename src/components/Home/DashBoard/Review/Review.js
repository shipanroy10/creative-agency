import React, { useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {


  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null)
  const handleBlur = e => {
    const newInfo = { ...info }
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo)
  }
  const handleChangeFile = e => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }
  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('companyName', info.companyName)
    formData.append('description', info.description)

    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-6">

          <div className="form-main">
            <form onSubmit={handleSubmit}>
              <div class="form-group">

                <input type="text" onBlur={handleBlur} name="name" aria-describedby="emailHelp" placeholder="name" />
              </div>

              <div class="form-group">
                <input type="text" placeholder="company name designation" onBlur={handleBlur} name="companyName" />

              </div>
              <div class="form-group">
                <input type="text" className="description" placeholder="description" onBlur={handleBlur} name="description" />

              </div>

              <div class="form-group">

                <input onChange={handleChangeFile} type="file" id="exampleInputPassword1" placeholder="icons" />

              </div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </form>

          </div>











        </div>
      </div>
    </section>
  );
};

export default Review;