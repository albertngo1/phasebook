# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Friendship.destroy_all
Comment.destroy_all

albert_user = User.create(first_name: "Albert",
last_name: "Ngo", email: "albertngo1@gmail.com", birth_day: 30,
birth_month: 9, birth_year: 1989, password: "password",
gender: "male", education: "University of Hard Knocks", current_city: "New York, NY", hometown: "Austin, TX", introduction: "Welcome to my page!")

kenneth_user = User.create(first_name: "Kenneth",
 last_name: "Ng", email: "kennethng@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "SUNY", current_city: "New York, NY", hometown: "Flushing, NY",
gender: "male", introduction: "It's lit")

albert_post1 = Post.create(body: "My first post", author_id: albert_user.id, receiver_id: albert_user.id)
albert_post2 = Post.create(body: "My second post", author_id: albert_user.id, receiver_id: albert_user.id)
kenneth_post1 = Post.create(body: "My third post", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post2 = Post.create(body: "My fourth post", author_id: kenneth_user.id, receiver_id: kenneth_user.id)

albert_kenneth_friend = Friendship.create(user1_id: albert_user.id, user2_id: kenneth_user.id, status: "active")
