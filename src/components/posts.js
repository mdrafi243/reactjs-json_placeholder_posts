import React from "react";
import isEmpty from "../utils/is-Empty";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Description from "material-ui/svg-icons/action/description";
import IconButton from "material-ui/IconButton";
import { withRouter } from "react-router";

const Posts = props => {
  const displayPost = post_id => {
    props.history.push(`/post/view/${post_id}`);
  };
  return (
    <div>
      {isEmpty(props.posts) ? (
        <h1>Sorry, No posts available</h1>
      ) : (
        <Table
          className="table"
          fixedHeader={false}
          fixedFooter={false}
          selectable={false}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Post id">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Post userId">
                User ID
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Post title">Title</TableHeaderColumn>
              <TableHeaderColumn tooltip="Post body">Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover={false}
            stripedRows={false}
          >
            {props.posts.map((post, i) => (
              <TableRow key={i}>
                <TableRowColumn key={1}>{post.id}</TableRowColumn>
                <TableRowColumn key={2}>{post.userId}</TableRowColumn>
                <TableRowColumn key={3}>{post.title}</TableRowColumn>
                <TableRowColumn key={4}>{post.body}</TableRowColumn>
                <TableRowColumn key={5}>
                  <IconButton onClick={() => displayPost(post.id)}>
                    <Description title="display_post" color="#43A047" />
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default withRouter(Posts);
