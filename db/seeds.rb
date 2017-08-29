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

andy_user = User.create(first_name: "Andy",
 last_name: "Yee", email: "andyyee@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "Binghamton University", current_city: "New York, NY", hometown: "Brooklyn, NY",
gender: "male", introduction: "I play League of Legends")

jonathan_user = User.create(first_name: "Jonathan",
 last_name: "Tsao", email: "jonathantsao@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "Carnegie Mellon University", current_city: "New York, NY", hometown: "Cupertino, CA",
gender: "male", introduction: "Visit my webpage, ShareTube!")

nate_user = User.create(first_name: "Nate",
 last_name: "Chapman", email: "natechapman@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "University of Illinois at Urbana–Champaign", current_city: "New York, NY", hometown: "Chicago, IL",
gender: "male", introduction: "I play DOTA. SingSing is the best.")

albert_post1 = Post.create(body: "My first post", author_id: albert_user.id, receiver_id: albert_user.id)
albert_post2 = Post.create(body: "My second post", author_id: albert_user.id, receiver_id: albert_user.id)
kenneth_post1 = Post.create(body: "My third post", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post2 = Post.create(body: "My fourth post", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
andy_post1 = Post.create(body: "anyone know where to buy handball gloves besides online??", author_id: andy_user.id, receiver_id: andy_user.id)
andy_post2 = Post.create(body: "please, a moment of silence for the pen I just lost", author_id: andy_user.id, receiver_id: andy_user.id)
andy_post2 = Post.create(body: "1,000,000 / 4,000 = 256
i did it on a calculator trust me", author_id: andy_user.id, receiver_id: andy_user.id)

albert_kenneth_friend = Friendship.create(user1_id: albert_user.id, user2_id: kenneth_user.id, status: "active")
andy_albert_friend = Friendship.create(user1_id: andy_user.id, user2_id: albert_user.id, status: "pending")
albert_jonathan_friend = Friendship.create(user1_id: albert_user.id, user2_id: jonathan_user.id, status: "pending")
