import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import { connect } from "react-redux";
import isEmpty from "../utils/is-Empty";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import { withRouter } from "react-router";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { post_id: this.props.match.params.id };
  }
  componentDidMount = () => {
    this.props.fetchPost(this.props.match.params.id);
  };
  render() {
    console.log(this.props.post);
    return (
      <div>
        <IconButton
          tooltip="Go to Posts page"
          tooltipPosition="top-center"
          onClick={() => this.props.history.push(`/`)}
        >
          <ArrowBack title="display_post" color="#43A047" />
        </IconButton>
        {isEmpty(this.props.post) ? (
          <h1>Post not available</h1>
        ) : (
          <div>
            <div className="post-text">
              <label>ID :</label>
              <span>{this.props.post.id}</span>
            </div>
            <div className="post-text">USER ID : {this.props.post.userId}</div>
            <div className="post-text">TITLE : {this.props.post.title}</div>
            <div className="post-text">BODY : {this.props.post.body}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: post_id => dispatch(postActions.fetchPost(post_id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)
);
