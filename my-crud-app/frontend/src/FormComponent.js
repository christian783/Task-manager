import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const FormComponent = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        businessArena: '',
        employees: '',
        street: '',
        additionalInfo: '',
        zipCode: '',
        place: '',
        country: '',
        code: '',
        phoneNumber: '',
        email: ''
    });
    const [editingUserId, setEditingUserId] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get('http://localhost:5000/getUsers');
        setUsers(res.data);
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (editingUserId) {
            await axios.put(`http://localhost:5000/updateUser/${editingUserId}`, form);
            setEditingUserId(null);
        } else {
            await axios.post('http://localhost:5000/addUser', form);
        }
        getUsers();
        setForm({
            title: '',
            firstName: '',
            lastName: '',
            position: '',
            company: '',
            businessArena: '',
            employees: '',
            street: '',
            additionalInfo: '',
            zipCode: '',
            place: '',
            country: '',
            code: '',
            phoneNumber: '',
            email: ''
        });
    };

    const handleEdit = user => {
        setForm(user);
        setEditingUserId(user.id);
    };

    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/deleteUser/${id}`);
        getUsers();
    };

    return (
        <div className="container mt-5">
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <h2>General Information</h2>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" className="form-control" value={form.firstName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" className="form-control" value={form.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Position</label>
                            <input type="text" name="position" className="form-control" value={form.position} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" name="company" className="form-control" value={form.company} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Business Arena</label>
                            <input type="text" name="businessArena" className="form-control" value={form.businessArena} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Employees</label>
                            <input type="text" name="employees" className="form-control" value={form.employees} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Details</h2>
                        <div className="form-group">
                            <label>Street + Nr</label>
                            <input type="text" name="street" className="form-control" value={form.street} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Additional Information</label>
                            <input type="text" name="additionalInfo" className="form-control" value={form.additionalInfo} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Zip Code</label>
                            <input type="text" name="zipCode" className="form-control" value={form.zipCode} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Place</label>
                            <input type="text" name="place" className="form-control" value={form.place} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" name="country" className="form-control" value={form.country} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Code</label>
                            <input type="text" name="code" className="form-control" value={form.code} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" className="form-control" value={form.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="termsCheck" />
                    <label className="form-check-label" htmlFor="termsCheck">I do accept the Terms and Conditions of your site.</label>
                </div>
                <button type="submit" className="btn btn-primary">{editingUserId ? 'Update' : 'Register Badge'}</button>
            </form>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Business Arena</th>
                            <th>Employees</th>
                            <th>Street</th>
                            <th>Additional Info</th>
                            <th>Zip Code</th>
                            <th>Place</th>
                            <th>Country</th>
                            <th>Code</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.title}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.position}</td>
                                <td>{user.company}</td>
                                <td>{user.businessArena}</td>
                                <td>{user.employees}</td>
                                <td>{user.street}</td>
                                <td>{user.additionalInfo}</td>
                                <td>{user.zipCode}</td>
                                <td>{user.place}</td>
                                <td>{user.country}</td>
                                <td>{user.code}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormComponent;
