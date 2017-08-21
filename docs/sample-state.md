```javascript
{
  ui: {
    notifications: []
  }
  session: {
    currentUser: {
      id: 1
    }
    errors: []
  },

  entities: {
    users: {

    },

    posts: {
      1: {
        body: "My first post",
        author_id: 1,
        comment_ids: [1, 2, 1],
        like_ids: [1, 2, 3]
      },

      2: {
        body: "My second post",
        author_id: 1
        comment_ids: [1]
      }
    },

    comments: {
      1: {
        body: "My first comment",
        author_id: 1,
        post_id: 1,
        like_ids: [1, 2, 4],
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
        friend_id1: 1
        friend_id2: 2,
        friend_status: "pending"
      },
      2: {
        friend_id1: 1
        friend_id2: 4,
        friend_status: "friend"
      },
      3: {
        friend_id1: 4
        friend_id2: 1,
        friend_status: "friend"
      }
    }
  }
}

```
