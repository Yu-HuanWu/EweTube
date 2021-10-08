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
Comment.destroy_all
Like.destroy_all

demo = User.create!({username: "Demo McDemoface", password: "DemoUserPassword"})
pecora = User.create!({username: "Pecora", password: "pecorapassword"})
tsfan = User.create!({username: "TayTayNumber1fan", password: "tsfanpassword"})
djgoat = User.create!({username: "DJ_D34DG0AT", password: "djgoatpassword"})
mama = User.create!({username: "MamaGoat98", password: "mamapassword"})
kid = User.create!({username: "KidToysReview", password: "kidpassword"})
hop = User.create!({username: "PokeTrainerHop", password: "hoppassword"})
rosheep = User.create!({username: "RosheepAtwood", password: "rosheeppassword"})
notwolf = User.create!({username: "Definitely_Not_W0lf", password: "notwolfpassword"})

pecoraVid = Video.new({title: "Divertimento sotto il sole", description: "io e i miei fratelli ci divertiamo", user_id: pecora.id, views: 142})
pvideo1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/talkingItalianSheep.mp4")
pecoraVid.uploaded_video.attach(io: pvideo1, filename: 'italiansheep')
pthumbnail1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/talkingItalianSheep.png")
pecoraVid.thumbnail.attach(io: pthumbnail1, filename: 'italiansheepIMG')
pecoraVid.save

pecoraVid2 = Video.new({title: "parkour!!!!", description: "Guarda il mio parkour!!!!", user_id: pecora.id, views: 384})
pvideo2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/parkoursheep.mp4")
pecoraVid2.uploaded_video.attach(io: pvideo2, filename: 'parkoursheep')
pthumbnail2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/parkoursheep.png")
pecoraVid2.thumbnail.attach(io: pthumbnail2, filename: 'parkoursheepIMG')
pecoraVid2.save

tsfanVid = Video.new({title: "My Swiftie Cover", description: "My audition tape to be Taylor Swift's backup singer", user_id: tsfan.id, views: 2})
video2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/tswift_goat.mp4")
tsfanVid.uploaded_video.attach(io: video2, filename: 'tswiftgoat')
thumbnail2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/tswift_goat.png")
tsfanVid.thumbnail.attach(io:thumbnail2, filename: 'tswiftgoatIMG')
tsfanVid.save

tsfanVid2 = Video.new({title: "OMG meeting my idol IRL!!!", description: "i LITERALLY can't believe this happened to me! i'm literally at loss for words!", user_id: tsfan.id, views: 9})
video3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/meetingTS.mp4")
tsfanVid2.uploaded_video.attach(io: video3, filename: 'meetingTS')
thumbnail3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/meetingTS.png")
tsfanVid2.thumbnail.attach(io:thumbnail3, filename: 'meetingTSIMG')
tsfanVid2.save

djVid1 = Video.new({title: "Party In The Ewe-S-A", description: "Released on August 11, 2009.", user_id: djgoat.id, views: 2953})
djvideo1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/partyintheewesa.mp4")
djVid1.uploaded_video.attach(io: djvideo1, filename: 'partyintheewesa')
djthumbnail1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/partyintheewesa.png")
djVid1.thumbnail.attach(io: djthumbnail1, filename: 'partyintheewesaIMG')
djVid1.save

djVid2 = Video.new({title: "Firework", description: "Released in 2010.", user_id: djgoat.id, views: 387})
djvideo2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/firework.mp4")
djVid2.uploaded_video.attach(io: djvideo2, filename: 'firework')
djthumbnail2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/firework.png")
djVid2.thumbnail.attach(io: djthumbnail2, filename: 'fireworkIMG')
djVid2.save

djVid3 = Video.new({title: "Goat on Fire", description: "Released in 2012.", user_id: djgoat.id, views: 717})
djvideo3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/goatonfire.mp4")
djVid3.uploaded_video.attach(io: djvideo3, filename: 'goatonfire')
djthumbnail3= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/goatonfire.png")
djVid3.thumbnail.attach(io: djthumbnail3, filename: 'goatonfireIMG')
djVid3.save

djVid4 = Video.new({title: "Shearin' on a Prayer", description: "Released in 1986.", user_id: djgoat.id, views: 203})
djvideo4= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/livingonprayer.mp4")
djVid4.uploaded_video.attach(io: djvideo4, filename: 'livingonprayer')
djthumbnail4= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/livingonprayer.png")
djVid4.thumbnail.attach(io: djthumbnail4, filename: 'livingonprayerIMG')
djVid4.save

hopVid1 = Video.new({title: "Introducing my Wooloo", description: "I love hanging out with my silly Wooloo", user_id: hop.id, views: 151})
hopvideo1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/wooloo.mp4")
hopVid1.uploaded_video.attach(io: hopvideo1, filename: 'wooloo')
hopthumbnail1= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/wooloo.png")
hopVid1.thumbnail.attach(io: hopthumbnail1, filename: 'woolooIMG')
hopVid1.save

hopVid2 = Video.new({title: "Wooloo can fly?!", description: "I did not use TM or HM! There's still so much I need to learn about pokemon in order to stand a chance against Leon!", user_id: hop.id, views: 890})
hopvideo2 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/wooloofly.mp4")
hopVid2.uploaded_video.attach(io: hopvideo2, filename: 'wooloofly')
hopthumbnail2= open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/wooloofly.png")
hopVid2.thumbnail.attach(io: hopthumbnail2, filename: 'woolooflyIMG')
hopVid2.save

rosheepVid = Video.new({title: "PRANK (GONE WRONG?!) ft. Fisherman", description: "If you like my prank don't forget to comment and like my videos!", user_id: rosheep.id, views: 420})
rosheepvideo = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/pranksheep.mp4")
rosheepVid.uploaded_video.attach(io: rosheepvideo, filename: 'pranksheep')
rosheepthumbnail = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/pranksheep.png")
rosheepVid.thumbnail.attach(io: rosheepthumbnail, filename: 'pranksheepIMG')
rosheepVid.save

mamaVid = Video.new({title: "my kid says the DARNEST things!", description: "One of the many joys of being a parent!", user_id: mama.id, views: 44})
mamaVideo = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/kidtalk.mp4")
mamaVid.uploaded_video.attach(io: mamaVideo, filename: 'kidtalk')
mamathumbnail = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/kidtalk.png")
mamaVid.thumbnail.attach(io: mamathumbnail, filename: 'kidtalkIMG')
mamaVid.save

mamaVid2 = Video.new({title: "Story time: this is how I wake up", description: "Being a parent is not all glamour and glitter...", user_id: mama.id, views: 6})
mamaVideo2 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/morningsheep.mp4")
mamaVid2.uploaded_video.attach(io: mamaVideo2, filename: 'morningsheep')
mamathumbnail2 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/morningsheep.png")
mamaVid2.thumbnail.attach(io: mamathumbnail2, filename: 'morningsheepIMG')
mamaVid2.save

mamaVid3 = Video.new({title: "Kid demands attentions!", description: "What a boss kid! I wonder where he gets it from...", user_id: mama.id, views: 875})
mamaVideo3 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/sheepscratch.mp4")
mamaVid3.uploaded_video.attach(io: mamaVideo3, filename: 'sheepscratch')
mamathumbnail3 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/sheepscratch.png")
mamaVid3.thumbnail.attach(io: mamathumbnail3, filename: 'sheepscratchIMG')
mamaVid3.save

kidVid = Video.new({title: "New Toy Unboxing! Exclusive!", description: "New toy haul! Don't forget to like andd comment below on what toy I should review next!", user_id: kid.id, views: 1337})
kidVideo = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/sheeptoy.mp4")
kidVid.uploaded_video.attach(io: kidVideo, filename: 'sheeptoy')
kidthumbnail = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/sheeptoy.png")
kidVid.thumbnail.attach(io: kidthumbnail, filename: 'sheeptoyIMG')
kidVid.save

kidVid2 = Video.new({title: "New Cosplay! Homemade!", description: "Which Superhero am I? Don't forget to like andd comment below on which character I should cosplay next!", user_id: kid.id, views: 456})
kidVideo2 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/cosplaysheep.mp4")
kidVid2.uploaded_video.attach(io: kidVideo2, filename: 'cosplaysheep')
kidthumbnail2 = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/cosplaysheep.png")
kidVid2.thumbnail.attach(io: kidthumbnail2, filename: 'cosplaysheepIMG')
kidVid2.save

notwolfVid = Video.new({title: "Basics with Babish", description: "One of my fav episode, Babish knocked this dish off the park!", user_id: notwolf.id, views: 9001})
notwolfvideo = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/basicswithbabish.mp4")
notwolfVid.uploaded_video.attach(io: notwolfvideo, filename: 'basicsbabish')
notwolfthumbnail = open("https://ewetube-seeds.s3.us-west-1.amazonaws.com/basicswithbabish.png")
notwolfVid.thumbnail.attach(io: notwolfthumbnail, filename: 'basicsbabishIMG')
notwolfVid.save

comment1= Comment.create!({user_id: rosheep.id, video_id: tsfanVid2.id, body: "Taylor Swift is overrated!"})
comment2= Comment.create!({user_id: tsfan.id, video_id: tsfanVid2.id, body: "How dare you"})
comment3= Comment.create!({user_id: djgoat.id, video_id: tsfanVid.id, body: "Love your voice! Mind if I sample it in my video?"})
comment4= Comment.create!({user_id: tsfan.id, video_id: tsfanVid.id, body: "Omg DJ DeadGoat just commented on my video!!!"})
comment5= Comment.create!({user_id: notwolf.id, video_id: tsfanVid.id, body: "your voice sounds absolutely delicious, i must invite you to my recording studio one of these days."})
comment6= Comment.create!({user_id: kid.id, video_id: djVid1.id, body: "Is this the national anthem? if not then why not?"})
comment7= Comment.create!({user_id: mama.id, video_id: djVid3.id, body: "Alicia Keys is QUEEN!!! We stan!!!!"})
comment8= Comment.create!({user_id: rosheep.id, video_id: djVid4.id, body: "There are two types of people in the world: people who loves Baaa Jovi and people who haven't heard of them yet."})
comment9= Comment.create!({user_id: kid.id, video_id: djVid4.id, body: "this music sounds so old, is it from during the civil war?"})
comment10= Comment.create!({user_id: kid.id, video_id: hopVid1.id, body: "hey we should collab, my vids' target demographic match with yours"})
comment11= Comment.create!({user_id: pecora.id, video_id: rosheepVid.id, body: "You are a funny man, love from across the Atlantic ocean! pace e amore!"})
comment12= Comment.create!({user_id: notwolf.id, video_id: mamaVid2.id, body: "I think you look great! I love all-nature mea- uh... look!"})
comment13= Comment.create!({user_id: rosheep.id, video_id: kidVid2.id, body: "dollar store batman"})
comment14= Comment.create!({user_id: mama.id, video_id: kidVid2.id, body: "If you don't have anything nice to say Rosheep then don't say anything!"})
comment15= Comment.create!({user_id: pecora.id, video_id: notwolfVid.id, body: "Terribile!!!!!"})
comment16= Comment.create!({user_id: tsfan.id, video_id: notwolfVid.id, body: "How can you post something so disgusting?!?! I am going to report you!"})
comment17= Comment.create!({user_id: djgoat.id, video_id: notwolfVid.id, body: "yooo this ain't it chief"})
comment18= Comment.create!({user_id: mama.id, video_id: notwolfVid.id, body: "THERE ARE KIDS ON THIS SITE! WHAT IS WRONG WITH YOU?!"})
comment19= Comment.create!({user_id: rosheep.id, video_id: notwolfVid.id, body: "As a fellow foodie, i don't know what everyone's upset about, looks like he's about to make some mint and basil sauce.   EDIT: yo wtf"})

like1= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: rosheep.id)
like2= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: mama.id)
like3= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: djgoat.id)
like4= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: tsfan.id)
like5= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: pecora.id)
like6= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: kid.id)
like7= Like.create!(num_likes: 0, video_id: notwolfVid.id, user_id: hop.id)
like8= Like.create!(num_likes: 1, video_id: notwolfVid.id, user_id: notwolf.id)
like9= Like.create!(num_likes: 1, video_id: tsfanVid.id, user_id: notwolf.id)
like10= Like.create!(num_likes: 0, video_id: tsfanVid2.id, user_id: rosheep.id)
like11= Like.create!(num_likes: 1, video_id: djVid1.id, user_id: pecora.id)
like12= Like.create!(num_likes: 1, video_id: djVid1.id, user_id: tsfan.id)
like13= Like.create!(num_likes: 1, video_id: djVid1.id, user_id: kid.id)
like14= Like.create!(num_likes: 1, video_id: djVid1.id, user_id: mama.id)
like15= Like.create!(num_likes: 1, video_id: djVid3.id, user_id: mama.id)
like16= Like.create!(num_likes: 1, video_id: djVid4.id, user_id: pecora.id)
like17= Like.create!(num_likes: 1, video_id: djVid4.id, user_id: rosheep.id)
like18= Like.create!(num_likes: 0, video_id: djVid4.id, user_id: kid.id)
like19= Like.create!(num_likes: 1, video_id: hopVid1.id, user_id: kid.id)
like20= Like.create!(num_likes: 1, video_id: hopVid2.id, user_id: kid.id)
like21= Like.create!(num_likes: 1, video_id: rosheepVid.id, user_id: pecora.id)
like22= Like.create!(num_likes: 1, video_id: rosheepVid.id, user_id: kid.id)
like23= Like.create!(num_likes: 0, video_id: rosheepVid.id, user_id: mama.id)
like24= Like.create!(num_likes: 1, video_id: mamaVid.id, user_id: notwolf.id)
like25= Like.create!(num_likes: 1, video_id: mamaVid2.id, user_id: notwolf.id)
like26= Like.create!(num_likes: 1, video_id: mamaVid3.id, user_id: notwolf.id)
like27= Like.create!(num_likes: 1, video_id: kidVid.id, user_id: mama.id)
like28= Like.create!(num_likes: 1, video_id: kidVid2.id, user_id: mama.id)
like29= Like.create!(num_likes: 0, video_id: kidVid2.id, user_id: rosheep.id)
like30= Like.create!(num_likes: 1, video_id: tsfanVid.id, user_id: djgoat.id)