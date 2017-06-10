var PostsList = React.createClass({
    getInitialState: function() {
        return { posts: this.props.initialPosts };
    },

    render: function() {
        var posts = this.state.posts.map(function(post) {
            return <Post key={post.id} post={post} />;
        });

        return (
            <div className="posts">
                {posts}
            </div>
        );
    }
});

var PostContent = React.createClass({
    render: function() {
        return (
            <div className="post-contents">
                {this.props.post.contents}
            </div>
        );
    }
});
