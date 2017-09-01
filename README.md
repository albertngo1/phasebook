# Phasebook

[Link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

Phasebook is a single-page, full-stack web application built with Ruby on Rails, React/Redux (featuring Javascript, HTML/CSS) and PostgreSQL.

## Features and Implementation

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Profiles
- [ ] Friending
- [ ] Comments/posting on each others’ walls
- [ ] News Feed
- [ ] Bonus: Notifications (Tommy Pickles commented on your wall)
- [ ] Bonus: Likes
- [ ] Bonus: Comments on a comment
- [ ] Bonus: Search
- [ ] Bonus: Messaging
- [ ] Bonus: Pictures/albums

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend and Front End User Authentication (1 days)

**Objective:** Backend + Frontend Authentication, initial tables started
(users, posts). CSS styling.

### Phase 2: Newsfeed (2 days)

**Objective:** Begin working on newsfeed. This includes backend (posts) and implementing the newsfeed. CSS styling.

### Phase 3: Friendships/Comments (3 days)

**Objective:** Friendship implementation between users. Fix newsfeed to allow only friend items to be viewed by user. Friend requests / approval (accept) and deletion (reject). Allow commentings on posts. CSS styling.

### Phase 4: User show page (2 day)

**Objective:** User profile page design. Includes multiple indices for many attributes of users (friends, pictures, posts) as well as other external attributes made by friends/user (likes, comments). CSS styling

### Phase 5: Likes (1 day)

**Objective:** Allow liking on posts, comments, pictures. CSS styling.
