```javascript
{
  ui: {
    currentUser: {
      id: 1
    }
  },

  posts: {
    1: {
      body: "My first post",
      author_id: 1
    },
    2: {
      body: "My second post",
      author_id: 1
    }
  },

  comments: {
    1: {
      body: "My first comment",
      author_id: 1,
      post_id: 1,
      parent_comment_id: null
    }
  },

  likes: {
    1: {
      liker_id: 1,
      post_id: 1,
      comment_id: null
    }
  },

  friendships: {
    1: {
      id: 1,
      friend_id: 2,
      friend_status: "pending"
    },
    2: {
      id: 1,
      friend_id: 4,
      friend_status: "friend"
    }
  }

  forms: {
    errors: []
  },
}

```
