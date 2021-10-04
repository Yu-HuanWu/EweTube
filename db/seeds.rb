# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Video.destroy_all

demo = User.create!({username: "Demo McDemoface", password: "DemoUserPassword"})
pecora = User.create!({username: "Pecora", password: "pecorapassword"})
tsfan = User.create!({username: "TayTayNumber1fan", password: "tsfanpassword"})

pecoraVid = Video.create!({title: "Divertimento sotto il sole", description: "io e i miei fratelli ci divertiamo", length: 12, user_id: pecora.id, views: 142})
video1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/talkingItalianSheep.mp4")
pecoraVid.uploaded_video.attach(io: video1, filename: 'italiansheep')
thumbnail1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/talkingItalianSheep.png")
pecoraVid.thumbnail.attach(io:thumbnail1, filename: 'italiansheepIMG')

tsfanVid = Video.create!({title: "My Swiftie Remix", description: "My audition tape to be Taylor Swift's backup singer", length: 25, user_id: tsfan.id, views: 2})
video2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/tswift_goat.mp4")
tsfanVid.uploaded_video.attach(io: video2, filename: 'tswiftgoat')
thumbnail2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/tswift_goat.png")
tsfanVid.thumbnail.attach(io:thumbnail2, filename: 'tswiftgoatIMG')

tsfanVid2 = Video.create!({title: "OMG meeting my idol IRL!!!", description: "i LITERALLY can't believe this happened to me! i'm literally at loss for words!", length: 15, user_id: tsfan.id, views: 9})
video3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/meetingTS.mp4")
tsfanVid2.uploaded_video.attach(io: video3, filename: 'meetingTS')
thumbnail3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/meetingTS.png")
tsfanVid2.thumbnail.attach(io:thumbnail3, filename: 'meetingTSIMG')
