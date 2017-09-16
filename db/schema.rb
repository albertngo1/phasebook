# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170916191145) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "post_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id", "recipient_id"], name: "index_conversations_on_creator_id_and_recipient_id"
    t.index ["creator_id"], name: "index_conversations_on_creator_id"
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user1_id", null: false
    t.integer "user2_id", null: false
    t.string "status", default: "pending", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user1_id", "user2_id"], name: "index_friendships_on_user1_id_and_user2_id"
    t.index ["user1_id"], name: "index_friendships_on_user1_id"
    t.index ["user2_id"], name: "index_friendships_on_user2_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.string "like_item_type", null: false
    t.bigint "like_item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["like_item_type", "like_item_id"], name: "index_likes_on_like_item_type_and_like_item_id"
    t.index ["liker_id", "like_item_type", "like_item_id"], name: "index_likes_on_liker_id_and_like_item_type_and_like_item_id", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "conversation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "receiver_id", default: 1, null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["receiver_id"], name: "index_posts_on_receiver_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "gender", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "education"
    t.string "current_city"
    t.string "hometown"
    t.string "relationship"
    t.text "introduction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "birth_day", null: false
    t.integer "birth_month", null: false
    t.integer "birth_year", null: false
    t.string "profile_pic_file_name"
    t.string "profile_pic_content_type"
    t.integer "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
    t.string "cover_page_file_name"
    t.string "cover_page_content_type"
    t.integer "cover_page_file_size"
    t.datetime "cover_page_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
