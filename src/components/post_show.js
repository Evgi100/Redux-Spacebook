import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/fetch_post'
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/delete_post'

class PostShow extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        // The match method is provided by the react-router and is matching the paramets in the given url
        this.props.fetchPost(id);
    }

    deletePost() {
        const id = this.props.match.params.id;
        // Call action creator to delete a post
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });

    }

    render() {
        const { post } = this.props;
        console.log(post)
        if (!post) {
            return <div>Loading</div>
        }
        return (
            <div>
                <Link to="/" className="btn btn-primary">All Posts</Link>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories}</h6>
                <p>{post.content}</p>
                <button
                    onClick={this.deletePost.bind(this)}
                    className="btn btn-danger">Delete Post</button>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

// ownProps is the props that is passed to the specific component 



export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);