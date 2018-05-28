namespace :organization do
  desc 'migrate assets from paperclip to active storage'
  task migrate_to_active_storage: :environment do
    User.where.not(profile_pic_file_name: nil).find_each do |user|
      url = 'https:' + user.profile_pic.url(:original, timestamp: false)
      user.profile_picture.attach(io: open(url),
                                  filename: user.profile_pic_file_name,
                                  content_type: user.profile_pic_content_type)
    end

    User.where.not(cover_page_file_name: nil).find_each do |user|
      url = 'https:' + user.cover_page.url(:original, timestamp: false)
      user.cover_picture.attach(io: open(url),
                                filename: user.cover_page_file_name,
                                content_type: user.cover_page_content_type)
    end

    Post.where.not(image_file_name: nil).find_each do |post|
      url = 'https:' + post.image.url(:original, timestamp: false)
      post.picture.attach(io: open(url),
                          filename: post.image_file_name,
                          content_type: post.image_content_type)
    end
  end
end
