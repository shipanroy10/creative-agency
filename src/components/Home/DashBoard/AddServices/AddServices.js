import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AddServices.css'
const AddServices = () => {
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
        formData.append('description', info.description)
        formData.append('email', info.email)

        fetch('https://mighty-inlet-60591.herokuapp.com/addAService', {
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
                                <label for="exampleInputEmail1">Service title</label>
                                <input type="text" onBlur={handleBlur} name="name" class="form-control" aria-describedby="emailHelp" placeholder="Service title" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">email</label>
                                <input type="email" onBlur={handleBlur} name="email" class="form-control" aria-describedby="emailHelp" placeholder="email" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Icon</label>
                                <input onChange={handleChangeFile} type="file" class="form-control" id="exampleInputPassword1" placeholder="icons" />
                            </div>

                            <div class="form-group">
                                <input type="text" onBlur={handleBlur} className="des" name="description" placeholder="description" class="form-control" />
                                <label class="form-check-label" for="exampleCheck1">Description</label>
                            </div>

                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AddServices;