# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first name      | string    | not null
last name       | string    | not null
email           | string    | not null, unique
phone number    | string    | not null
gender             | string    | not null
birthday        | date      | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
education       | string    |
current city    | string    |
hometown        | string    |
relationship    | string    |
joined_facebook | string    |
introduction    | text      |
profile_picture_url | string |
cover_page_picture_url | string |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id   | integer   | not null, foreign key (references posts), indexed
parent_comment_id  | integer   | foreign key (references parent comment), indexed
body        | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
post_id     | integer   | foreign key (references posts), indexed
comment_id  | integer   | foreign key (references comments), indexed

## pictures
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [tag_id]
image_url   | string    | not null

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friend_id   | integer   | not null, foreign key (references friends), indexed, unique [id]
friend_status | string  | not null
