import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/create_post'
// The reduxFrom helper connects the reducer to the component

class PostNew extends Component {

    renderField(field) {
        const className=`form-group${field.meta.touched&&field.meta.error?' has-danger':''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    // The field argument contains eventHandelers and is the one responsible for the two way data binding
    // Filed argument in the helper function is event handeler for any change in the Field attributr/component
onSubmit(values){
    
   this.props.createPost(values,()=>{
    this.props.history.push('/');
   });

}

    render() {

        const {handleSubmit}=this.props
        // The handleSubmit property is passed to the component through the reduxForm
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Post Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Category"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>

                <Link className="btn btn-danger"  to="/">Cancel</Link>

            </form>
        )
    }
}


function validate(values) {
    const errors = {};
    // Validate the inputs,if the errors has any properties then redux form assumes form is invalid

    if (!values.title) {
        errors.title = "Please enter a title!"
    }
    if (!values.categories) {
        errors.categories = "Please enter a category!"
    }
    if (!values.content) {
        errors.content = "Please enter some content!"
    }
    return errors;
}
// When the user submit the form the validate function will be called
// Values is the input values

// The component property is the one that renders on the screen
// Using the Filed instance we conecting each filed of the form to the reduxForm manger

export default reduxForm({
    validate: validate,
    form: 'PostNewFrom'
})(
   connect(null,{createPost})(PostNew)
);

// Each redux Form need a uniqe string that will assaign each form .