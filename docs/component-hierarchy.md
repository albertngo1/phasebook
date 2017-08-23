# Component Hierarchy

## Views

### Login/Signup

* App (Splash Page + Login + Sign Up)
  * Header
    * Session Container
      * Session Form
  * New User Container
    * New User Form
  * Static Facebook Logo
  * Static Facebook Context


### Home

* App
  * Header
    * Search Container
      * Search
    * Notification Container (possible this needs to be broken up further)
      * Friend Requests/Recommendations
      * Messages
      * Notifications
  * Newsfeed
    * Post Index Container
      * Post Form Container
        * Post Form
      * Post Index
        * Post Index Item
  * Left Sidebar
    * Static External Links
  * Middle Sidebar
    * Event Container
      * Event Item
      * Birthday Item
    * Trending Container
      * Trending Item
    * Static Ad
  * Chat Container
    * Chat Index
      * Chat Item
  * Feed Ticker Story Container
    * Feed Ticker Story Index
      * Feed Ticker Story Item

### User Profile Page

* App
  * Header
    * Search Container
      * Search
    * Notification Container (possible this needs to be broken up further)
      * Friend Requests/Recommendations
      * Messages
      * Notifications
  * User Profile Container
    * User Detail
      * Profile Picture
      * User Detail Form
      * User Detail Item
    * Picture Index
      * Picture Index Item
    * Friends Index
      * Friend Index Item
    * User Newsfeed
      * User Post Form (if profile page is at current user)
      * User Index Item
    * Cover Page Picture
    * Nav Item (Update Info, Activity Log, etc)
  * Tab Navigation for [Timeline, About, Friends, Photos] (Static(?))



## Routes

|Path                  | Component           |
|----------------------|---------------------|
| "/"           | "NewUserContainer"  |
| "/"           | "SessionContainer"  |
| "/"          | "NewsFeedContainer" |
| "/profile/:id"       | "ProfileContainer"  |
