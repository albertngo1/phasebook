# Phasebook

![alt text](/docs/production_readme_misc/phasebook.png)


[Link][phasebook]

[phasebook]: https://phasebook-august.herokuapp.com/

Phasebook is a single-page, full-stack web application built with Ruby on Rails, React/Redux (featuring Javascript, HTML/CSS) and PostgreSQL.

## Features and Implementation  

  The app contains the following features:
  * User login/creation
  * Creating/editing/deleting posts
  * Commenting
  * Likes
  * Friending
  * Search
  * Newsfeed
  * User show page
  * Chat messenger
  * User information editing
  * Profile picture/Cover page upload


### User Authentication

The app utilizes a custom-made backend and frontend authentication protocol to allow
permissive activities on the app.

![alt text](/docs/production_readme_misc/login_signup.gif)

User authentication assigns a session token that is stored on the user's device as a cookie. On the frontend, the current user is bootstrapped to maintain login status of the current user upon refresh or navigating between different pages.

```javascript
if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser }};
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
```

### Post Creation

Users are able to make posts on their main newsfeed page or on their friends' pages. Posts may comprise of text, images, or both. Posts can be made as a self post (status post), or they can be directed at a friend.

![alt text](/docs/production_readme_misc/post_creation.gif)

Posts can also be edited or deleted by the owner of the post. Permissives are included on the front and backend to disallow improper edits/deletes by unauthorized users.

### Search

Real-time search is featured in the navigation bar, where different users can be found based on input matching any of the users' names. On each input (or delete), a request is sent to the database to return matching results.

![alt text](/docs/production_readme_misc/search.gif)

Upon clicking on any of the search results, the page will route to the friend's (or user's) profile page.

### Friending

The friendship feature has a self-joins table to keep track of who is friends with who, who sent friend requests, and who received friend requests. A user is able to do the following:
* Accepting a friend request
* Send a friend request
* Cancel a friend request
* Adding a friend
* Removing a friend

![alt text](/docs/production_readme_misc/friends.gif)

Curated content is based on friends, as the newsfeed will only display content that belongs to the current user or his/her friends. Also, posting on profile pages where the users are not friends are forbidden.

### Likes and Comments

Comments can be made on posts and likes can be done on posts and comments.

![like](/docs/production_readme_misc/comments_likes.gif)

A polymorphic association was implemented to ensure that a like only points to one post or one comment.

```ruby
  belongs_to :like_item, :polymorphic => true

  params.require(:like).permit(:like_item_id, :like_item_type)
```

### Chat

A user can interact with their friends via live messaging. This involved having a chat bar that lists all friends that the user can talk wth, and upon clicking on a friend, opens a chat that can be toggled into and out of view, or exited.
The chat persists across the main newsfeed page and the individual show page.

```javascript
nextState["openChats"].push(action.conversation[Object.keys(action.conversation)[0]]);
if (nextState["openChats"].length > 3) {
  nextState["openChats"].shift();
}
```
```javascript
for (let j=0; j < nextState.openChats.length; j++) {
  if (nextState.openChats[j].id === action.conversationId) {
    nextState.openChats.splice(j, 1);
  }
}
```


### Other Features

The current user can also do the following to customize their page:

* Upload a profile picture
  - User can customize their profile picture by uploading a picture of their choice via `Paperclip`
* Upload a cover page
  - User can also show personality by uploading a picture of their choice for their cover page
* Edit personal user information including:
  - Introduction
  - Hometown
  - Current City
  - Relationship
  - Education


## Future Works

Phasebook has a long way to go to. In the future, I plan to work/implement the following:

* Continued bug-fixes and refactoring

* Replies to comments (comments on comments) and replies to replies

* Pictures
  - Users having a collection of pictures. Clicking on picture, profile picture, or cover page would resize to fit the browser window for deeper viewing.

* Miscellaneous interactivity/detailing that makes an app a social app:
  - Birthdays
  - Trending events
  - Story ticker feed
  - Being able to view friend list and friends' friend lists
  - About section for more detail about a user
