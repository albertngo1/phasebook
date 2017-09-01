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

musa_user = User.create(first_name: "Musa",
 last_name: "Raza", email: "musaraza@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", education: "University of Michigan", current_city: "New York, NY", hometown: "Pakistan",
gender: "male", introduction: "Sup dawg", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/12573224_10153855515144629_1818449245728761144_n.jpg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/19275043_10158768068625570_3351356088465485650_n.jpg")

abbas_user = User.create(first_name: "Abbas",
 last_name: "Soloki", email: "abbassoloki@gmail.com",
  birth_day: 30, birth_month: 9, birth_year: 1989,
   password: "password", current_city: "New York, NY", hometown: "New Jersey",
gender: "male", introduction: "I like frozen yogurt", profile_pic: "https://s3.us-east-2.amazonaws.com/phasebook-dev/Abbas.jpeg",
cover_page: "https://s3.us-east-2.amazonaws.com/phasebook-dev/o-FROZEN-YOGURT-TOPPINGS-facebook.jpg")






albert_post1 = Post.create(body: "My first post", author_id: albert_user.id, receiver_id: albert_user.id)
albert_post2 = Post.create(body: "My second post", author_id: albert_user.id, receiver_id: albert_user.id)
albert_post2 = Post.create(body: "check out this pic!", author_id: albert_user.id, receiver_id: albert_user.id, image: "https://s3.us-east-2.amazonaws.com/phasebook-dev/3634462128.jpg")
kenneth_post1 = Post.create(body: "SZECHUAN TERIYAKI SAUCE", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post2 = Post.create(body: "Just a reminder that OKC had three budding MVPs at one point.", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post3 = Post.create(body: "ORACLE ARENA IS GONNA BE LITTTT 🏀🏀🏀🔥🔥🔥", author_id: kenneth_user.id, receiver_id: kenneth_user.id)
kenneth_post4 = Post.create(body: "what are you doing tonight? wanna come over and eat some ramen?", author_id: kenneth_user.id, receiver_id: albert_user.id)
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
nate_post4 = Post.create(body: "yo you wanna run a game of dota tonight? ill support you", author_id: nate_user.id, receiver_id: kenneth_user.id)
musa_post1 = Post.create(body: "hello all my name is musa and i hail from pakistan. i like cricket", author_id: musa_user.id, receiver_id: musa_user.id)
musa_post2 = Post.create(body: "gone with the wind is my favorite movie", author_id: musa_user.id, receiver_id: musa_user.id)
abbas_post1 = Post.create(body: "i'm sick", author_id: abbas_user.id, receiver_id: abbas_user.id)
abbas_post2 = Post.create(body: "i like frozen yogurt", author_id: abbas_user.id, receiver_id: abbas_user.id)
abbas_post3 = Post.create(body: "my favorite food:", author_id: abbas_user.id, receiver_id: abbas_user.id, image: "https://s3.us-east-2.amazonaws.com/phasebook-dev/veganfrozenyogurt.jpg")

kenneth_comment1 = Comment.create(body: "LOL", author_id: kenneth_user.id, post_id: andy_post2.id)
kenneth_comment2 = Comment.create(body: "haha that sucks man", author_id: kenneth_user.id, post_id: jonathan_post1.id)
kenneth_comment3 = Comment.create(body: "my first comment LOL XP", author_id: kenneth_user.id, post_id: albert_post1.id)

jonathan_comment1 = Comment.create(body: "go golden state lol, that's my hometown brah", author_id: jonathan_user.id, post_id: kenneth_post3.id)
jonathan_comment2 = Comment.create(body: "yeahh im down lol lets do this", author_id: jonathan_user.id, post_id: kenneth_post4.id)

andy_comment1 = Comment.create(body: "lol lets play league brah", author_id: andy_user.id, post_id: abbas_post1.id)
andy_comment2 = Comment.create(body: "happy birthday :]", author_id: andy_user.id, post_id: jonathan_post3.id)

abbas_comment1 = Comment.create(body: "hello my middle eastern brother", author_id: abbas_user.id, post_id: musa_post1.id)


Like.create(liker_id: andy_user.id, like_item_id: kenneth_post1.id, like_item_type: "Post")
Like.create(liker_id: andy_user.id, like_item_id: kenneth_post2.id, like_item_type: "Post")
Like.create(liker_id: andy_user.id, like_item_id: kenneth_post3.id, like_item_type: "Post")
Like.create(liker_id: andy_user.id, like_item_id: kenneth_post4.id, like_item_type: "Post")
Like.create(liker_id: andy_user.id, like_item_id: abbas_comment1.id, like_item_type: "Comment")
Like.create(liker_id: andy_user.id, like_item_id: andy_comment1.id, like_item_type: "Comment")
Like.create(liker_id: andy_user.id, like_item_id: jonathan_comment2.id, like_item_type: "Comment")








albert_kenneth_friend = Friendship.create(user1_id: albert_user.id, user2_id: kenneth_user.id, status: "active")
albert_jonathan_friend = Friendship.create(user1_id: albert_user.id, user2_id: jonathan_user.id, status: "active")
albert_musa_friend = Friendship.create(user1_id: albert_user.id, user2_id: musa_user.id, status: "active")
albert_abbas_friend = Friendship.create(user1_id: albert_user.id, user2_id: abbas_user.id, status: "active")

kenneth_andy_friend = Friendship.create(user1_id: kenneth_user.id, user2_id: andy_user.id, status: "active")
kenneth_jonathan_friend = Friendship.create(user1_id: kenneth_user.id, user2_id: jonathan_user.id, status: "active")
kenneth_musa_friend = Friendship.create(user1_id: kenneth_user.id, user2_id: musa_user.id, status: "active")
kenneth_nate_friend = Friendship.create(user1_id: kenneth_user.id, user2_id: nate_user.id, status: "active")

andy_jonathan_friend = Friendship.create(user1_id: andy_user.id, user2_id: jonathan_user.id, status: "active")
andy_nate_friend = Friendship.create(user1_id: andy_user.id, user2_id: nate_user.id, status: "active")
andy_abbas_friend = Friendship.create(user1_id: andy_user.id, user2_id: abbas_user.id, status: "active")

musa_abbas_friend = Friendship.create(user1_id: musa_user.id, user2_id: abbas_user.id, status: "active")


andy_albert_friend = Friendship.create(user1_id: andy_user.id, user2_id: albert_user.id, status: "pending")
nate_albert_friend = Friendship.create(user1_id: nate_user.id, user2_id: albert_user.id, status: "pending")




























































##
