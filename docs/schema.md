# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, unique
phone_number    | string    | not null
gender             | string    | not null
birthday        | date      | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
education       | string    |
current_city    | string    |
hometown        | string    |
relationship    | string    |
introduction    | text      |
- has_many posts, likes, comments, friendships, pictures

---

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
- belongs_to user
- has_many likes, comments

---

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id   | integer   | not null, foreign key (references posts), indexed
parent_comment_id  | integer   | foreign key (references parent comment), indexed
body        | text      | not null
- belongs_to user
- has_many likes, comments

---

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
like_item_id     | integer   | foreign key (references posts and comments via polymorphic association), indexed
comment_id  | integer   | foreign key (references comments), indexed
- belongs_to user, [post, comment]: like_item (polymorphic)

---

## pictures
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [tag_id]
image_url   | string    | not null
- belongs_to user

---

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friend1_id   | integer   | not null, foreign key (references friends), indexed, unique [id]
friend2_id   | integer   | not null, foreign key (references friends), indexed, unique [id]
friend_status | string  | not null
- belongs_to user
- unique combination between friend1 and friend2 as well as friend2 and friend1
