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

### Comments

- `POST /api/comments`
  - create new comment
- `PATCH /api/comments/:id`
  - update comment
- `DELETE /api/comments/:id`
  - delete comment

### Pictures

- `POST /api/pictures`
  - create new picture
- `GET /api/pictures/:id`
  - request picture
- `PATCH /api/pictures/:id`
  - update picture
- `DELETE /api/pictures/:id`

### Likes

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
