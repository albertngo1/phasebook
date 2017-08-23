# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user = User.create(first_name: "Albert", last_name: "Ngo", email: "albertngo1@gmail.com", birth_day: 30, birth_month: 9, birth_year: 1989, password: "password",
gender: "male")
