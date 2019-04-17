import React, { Component } from "react";
import SearchBar from "./searchBar";
import Posts from "./posts";
import * as postActions from "../actions/postActions";
import { connect } from "react-redux";
import isEmpty from "../utils/is-Empty";

class PostSearchpage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", filteredPosts: [] };
  }
  onSearchTextChange = e => {
    this.setState({ searchText: e.target.value });
  };
  filterPosts = (posts, searchText) => {
    if (!isEmpty(posts)) {
      return posts.filter(
        post =>
          post.title.includes(searchText) || post.body.includes(searchText)
      );
    }
    return [];
  };
  componentDidMount = () => {
    this.props.fetchPosts();
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.posts !== nextProps.posts && !isEmpty(nextProps.posts)) {
      this.setState({ filteredPosts: nextProps.posts });
      return true;
    } else if (this.state.searchText !== nextState.searchText) {
      return true;
    } else {
      return false;
    }
  }
  componentWillUnmount = () => {
    this.props.clearPosts();
  };
  render() {
    const filteredPosts = this.filterPosts(
      this.props.posts,
      this.state.searchText
    );
    console.log(filteredPosts);
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearch={this.onSearchTextChange}
        />
        <Posts posts={filteredPosts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(postActions.fetchPosts()),
    clearPosts: () => dispatch(postActions.clearPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSearchpage);
