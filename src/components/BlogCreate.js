import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { createBlogData } from '../redux/action';


function BlogCreate(props) {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    date: '',
    author: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!blogData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!blogData.date) {
      newErrors.date = 'Date is required';
    }

    if (!blogData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!blogData.author.trim()) {
      newErrors.author = 'Author is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      props.createBlogData(blogData);
      navigate('/');
    } else {
      console.error('Form validation failed');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Blog Creation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Blog Title:
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            className={`form-control ${errors.date ? 'is-invalid' : ''}`}
            id="date"
            name="date"
            value={blogData.date}
            onChange={handleChange}
          />
          {errors.date && <div className="invalid-feedback">{errors.date}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            className={`form-control ${errors.author ? 'is-invalid' : ''}`}
            id="author"
            name="author"
            value={blogData.author}
            onChange={handleChange}
          />
          {errors.author && <div className="invalid-feedback">{errors.author}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            id="description"
            name="description"
            value={blogData.description}
            onChange={handleChange}
          />
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <Link to="/">
          <button className="btn btn-secondary">
            Back
          </button>
        </Link>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  blogData: state 
});

const mapDispatchToProps = (dispatch) => ({
  createBlogData: (blogData) => dispatch(createBlogData(blogData))
});


export default connect(mapStateToProps, mapDispatchToProps)(BlogCreate);
