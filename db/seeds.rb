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
Like.destroy_all

albert_user = User.create({first_name: "Albert",
last_name: "Ngo", email: "albertngo1@gmail.com", birth_day: 30,
birth_month: 9, birth_year: 1989, password: "password",
gender: "male", education: "University of Hard Knocks", current_city: "New York, NY", hometown: "Austin, TX", introduction: "Welcome to my page!",
profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/2017-01-07+23.46.44.jpg", cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/1o0m80.jpg"})

kenneth_user = User.create(first_name: "Kenneth",
 last_name: "Ng", email: "kennethng@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "SUNY", current_city: "New York, NY", hometown: "Flushing, NY",
gender: "male", introduction: "It's lit", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/15272263_10154324017298138_7575934636018936261_o.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/Funny-Slam-Dunk-Basketball-Wallpaper-Picture-2709.jpg")

andy_user = User.create(first_name: "Andy",
 last_name: "Yee", email: "andyyee@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "Binghamton University", current_city: "New York, NY", hometown: "Brooklyn, NY",
gender: "male", introduction: "I play League of Legends", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/261289_10150352618973712_6424189_n.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/50f8c88d-9250-488c-916e-f161734f05df.jpg")

jonathan_user = User.create(first_name: "Jonathan",
 last_name: "Tsao", email: "jonathantsao@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "Carnegie Mellon University", current_city: "New York, NY", hometown: "Cupertino, CA",
gender: "male", introduction: "Visit my webpage, ShareTube!", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/17203026_1437923049580806_3185056461527865843_n.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/super-smash-bros-4-24158-1920x1080.jpg")

nate_user = User.create(first_name: "Nate",
 last_name: "Chapman", email: "natechapman@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "University of Illinois at Urbana–Champaign", current_city: "New York, NY", hometown: "Chicago, IL",
gender: "male", introduction: "I play DOTA. SingSing is the best.", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/1267113_2410091968797_1981880891_o.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/steamworkshop_webupload_previewfile_304424164_preview.jpg")

nate_user = User.create(first_name: "Musa",
 last_name: "Raza", email: "musaraza@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "University of Michigan", current_city: "New York, NY", hometown: "Pakistan",
gender: "male", introduction: "Sup dawg", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/12573224_10153855515144629_1818449245728761144_n.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/19275043_10158768068625570_3351356088465485650_n.jpg")






albert_post1 = Post.create(body: "My first post", author_id: albert_user.id, receiver_id: albert_user.id)
albert_post2 = Post.create(body: "My second post", author_id: albert_user.id, receiver_id: albert_user.id)
kenneth_post1 = Post.create(body: "SZECHUAN TERIYAKI SAUCE", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post2 = Post.create(body: "Just a reminder that OKC had three budding MVPs at one point.", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post3 = Post.create(body: "ORACLE ARENA IS GONNA BE LITTTT 🏀🏀🏀🔥🔥🔥", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
andy_post1 = Post.create(body: "anyone know where to buy handball gloves besides online??", author_id: andy_user.id, receiver_id: andy_user.id)
andy_post2 = Post.create(body: "please, a moment of silence for the pen I just lost", author_id: andy_user.id, receiver_id: andy_user.id)
andy_post2 = Post.create(body: "1,000,000 / 4,000 = 256
i did it on a calculator trust me", author_id: andy_user.id, receiver_id: andy_user.id)
jonathan_post1 = Post.create(body: "when you out with friends but realize you left the stove on at home", author_id: jonathan_user.id, receiver_id: jonathan_user.id)
jonathan_post2 = Post.create(body: ":)", author_id: jonathan_user.id, receiver_id: jonathan_user.id)
jonathan_post3 = Post.create(body: "Happy birthday Andrea Tsao! It has been so crazy the last couple years being away from home and from you, but thank you so much for taking forever in the shower, stealing all my iPhone chargers, and eating all of the ranch 99 snacks before I get to them. But mostly, thank you for being a role model in defining to me what it means to have a passion for the things around us and how to be a good kid to the other two goons in the photo. Judging from this photo, you definitely didn't get your fashion sense from dad (thank god none of us did). Hope you had an awesome day ya hipster", author_id: jonathan_user.id, receiver_id: jonathan_user.id)
nate_post1 = Post.create(body: ":)", author_id: nate_user.id, receiver_id: nate_user.id)
nate_post2 = Post.create(body: ":)", author_id: nate_user.id, receiver_id: nate_user.id)
nate_post3 = Post.create(body: ":)", author_id: nate_user.id, receiver_id: nate_user.id)



albert_kenneth_friend = Friendship.create(user1_id: albert_user.id, user2_id: kenneth_user.id, status: "active")
andy_albert_friend = Friendship.create(user1_id: andy_user.id, user2_id: albert_user.id, status: "pending")
nate_albert_friend = Friendship.create(user1_id: nate_user.id, user2_id: albert_user.id, status: "pending")
albert_jonathan_friend = Friendship.create(user1_id: albert_user.id, user2_id: jonathan_user.id, status: "pending")
