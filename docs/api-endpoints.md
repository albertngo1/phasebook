# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
  - users index/search
- `GET /api/users/:id`
  - user profile page
- `POST /api/users`
  - creates new user
- `PATCH /api/users/:id`
  - update user information (password, mobile #, email, birthday, etc)
- `GET /api/users/:id/friendships`
  - obtains all friends of user
- `GET /api/users/:id/posts`
  - obtains all posts of user
- `GET /api/users/:id/photos`
  - obtains all pictures of user


### Session

- `POST /api/session`
  - creates new logged in session for user
- `DELETE /api/session`
  - logs out session for user

### Posts

- `GET /api/posts`
  - posts index/search
- `POST /api/posts`
  - create new post
- `GET /api/posts/:id`
  - request post
- `PATCH /api/posts/:id`
  - update post
- `DELETE /api/posts/:id`
  - delete post
- `GET /api/posts/:id/comments`
  - all comments belonging to post
- `GET /api/posts/:id/likes`
  - all likes belonging to post

### Comments

- `GET /api/comments`
  - comments index/search
- `POST /api/comments`
  - create new comment
- `PATCH /api/comments/:id`
  - update comment
- `DELETE /api/comments/:id`
  - delete comment
- `GET /api/comments/:id/likes`
  - all likes belonging to comment

### Pictures

- `GET /api/pictures`
  - pictures index/search
- `POST /api/pictures`
  - create new picture
- `GET /api/pictures/:id`
  - request picture
- `PATCH /api/pictures/:id`
  - update picture
- `DELETE /api/pictures/:id`
  - delete picture
- `GET /api/pictures/:id/comments`
  - all comments belonging to picture
- `GET /api/pictures/:id/likes`
  - all likes belonging to picture

### Likes

- `GET /api/likes`
  - likes index/search
- `POST /api/likes`
  - create like ("liking")
- `DELETE /api/likes/:id`
  - delete like ("unliking")

### Friendships

- `GET /api/friendships`
  - friendships index/search
- `POST /api/friendships`
  - create friend request
- `PATCH /api/friendships/:id`
  - accept or reject friend request
- `DELETE /api/friendships/:id`
  - delete friend/friend request
