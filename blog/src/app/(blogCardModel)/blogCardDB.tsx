import BlogComment from "../blogComment"
import blogCardModel from "./blogCardModel"
import BlogCommentModel from "./blogCommentModel"
import BlogTags from "./BlogTags"

import * as vars from "./pregeneratedDBvars"

class BlogCardDB {

    cards: blogCardModel[] = [
        new blogCardModel(
            "Please help me find Blue!",
            "My best friend Blue, who runs this blog, has gone missing and I can’t find her anywhere. Please help me!",
            "7th of March " + vars.CURRENT_YEAR,
            "https://cdn.pixabay.com/photo/2013/07/12/18/09/help-153094_1280.png",
            "",
            "25tRf",
            "Hello. My name is Arvid but on this forum I have called myself Red. Blue, whose real name is Katie, has gone missing. Our mutual friends think I am overreacting and that she has just gone on one of her adventures, but I haven’t heard from her for eleven days which really makes me worried. I don’t really want to turn to the authorities yet, especially since Katie has developed kinda strong opinions on “the establishment” lately. \r\n\r\n That is why I am making this blog post. I feel like this little community around “Blue’s Blog” has heard a lot from her over the past few months. I was hoping maybe we could group up and try to figure out where she is together. Maybe we can figure something out based on the content of the blog? To communicate about this all I made a Discord server. Here is the invite: <a href='" + vars.DISCORD_URL + "' target='_blank'><u>LINK</u></a> \r\n\r\n Hope we can find something soon! If you figure anything out, make sure to share it in the Discord.",
            [new BlogCommentModel("Sasha47", "I'm sure she's fine, just give it another day or two!", "7th of March " + vars.CURRENT_YEAR, []),
             new BlogCommentModel("12Patsy21", "I'm so sorry to hear that. I hope you find her soon.", "8th of March " + vars.CURRENT_YEAR, []),
             new BlogCommentModel("ZuchiniMaster101", "I wish I could help, but I don't know her that well. I hope you find her soon!", "8th of March " + vars.CURRENT_YEAR, []),
            ],
            [BlogTags.MYSTERY, BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "Protecting Your Data in the Digital Age: Tips and Best Practices",
            "As we live in an increasingly connected world, it's important to take steps to protect our personal data and ensure our online safety. By using secure software, being mindful of what information we share, and holding companies accountable for their data handling practices, we can work towards a more secure digital future.",
            "27th of January " + vars.CURRENT_YEAR,
            "https://cdn.pixabay.com/photo/2016/10/12/11/17/global-security-1734189_1280.jpg",
            "",
            "89sKl",
            "Hello there! \r\n\r\n I want to talk about something that has been on my mind a lot lately - data security. \r\n We live in a digital age where we are constantly connected and our personal information can be spread across multiple platforms and servers. This can sometimes lead to concern and fear that our privacy and security may be compromised. \r\n\r\nThere are many things that can be done to protect our personal information and ensure our data security. First and foremost, it is important to use security software on our devices and keep it updated. It is also wise to use different passwords for different accounts and avoid using the same password in multiple places. \r\n\r\nAnother important step is to be aware of what information we share online and with whom. It can be tempting to click on links or give away personal information in exchange for something free, but we should always think about the consequences and potential risks. \r\n\r\n But even if we try to protect ourselves and our personal information, it is also important that we have trust in the companies and organizations that handle our data. This can sometimes be a challenge, especially given the recent scandals surrounding large tech companies and their handling of data. \r\n\r\n So what can we do? In addition to following the usual security protocols such as avoiding clicking on suspicious links and using security software, we can also demand more from the companies and organizations that handle our data. We can ask questions about their data security practices and demand that they act responsibly with our personal information. \r\n\r\n Concerns about data security are understandable in a world where technology is developing rapidly and threats to our security are becoming more common. But by being aware and acting responsibly, both as individuals and as a society, we can take steps towards a more secure digital world. \r\n\r\n Thank you for reading, and I hope we can continue to discuss important topics like this. \r\n Best regards, Blue.",
            [],
            [BlogTags.TECHNOLOGY]
        ),
        new blogCardModel(
            "Some Thoughts About INISTR, and a Podcast",
            "My workplace is really not giving me great vibes. I shared some of my thoughts on a local podcast!",
            "11th of January " + vars.CURRENT_YEAR,
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "",
            "yr84G",
            "Hey guys! \r\n\r\n As you know, I have been working at INISTR for a while now. Just like I mentioned in my post about the company, I have never really felt super comfortable or welcome here, and only really stay around to have a foot in the video game industry. Over the past few weeks though, I have started to grow kinda suspicious about the whole thing though. \r\n\r\n The company culture is very quiet, you basically never see your superiors and we are given very little context as to the purpose of our work. Honestly, I don’t really know what the code I write is being used for. On top of that, the company seems to be doing extremely well internationally yet most people have hardly ever heard of INISTR! The few public things that the company does seem to have fairly little to do with what I think the company should be doing. Overall, this just does not sit right with me at all any more. I want to find out more, or get out of here. \r\n\r\n I listen to this short local podcast called “Waking up with Rudolf”. They cover science and tech stuff, but the most interesting part is that they sometimes try to dig deeper into some industry secrets. I actually sent an email to them the other day about my feelings around INISTR, and shortly after, I was featured on a segment! If you want to listen to it, check it out by clicking <a href='/Waking_up_with_Rudolf_feat_me.mp3' download><u>HERE</u></a>. \r\n\r\n Anyways, that’s all for now, but I’m sure I’ll have more to say about INISTR in the future. Until then! \r\n\r\n Blue",
            [new BlogCommentModel("DogLoverOfGBG", "Funny how even the podcast calls you Blue!", "12th of January " + vars.CURRENT_YEAR, [new BlogCommentModel("Blue", "Can't be too careful you know...", "14th of January " + vars.CURRENT_YEAR, [])]),
             new BlogCommentModel("SimonAngberg", "Yeah I had never heard of inistr before I read your blog but they do seem very weird", "13th of January " + vars.CURRENT_YEAR, []),
             new BlogCommentModel("ZuchiniMaster101", "Cool being mentioned on a podcast!", "14th of January " + vars.CURRENT_YEAR, [new BlogCommentModel("Blue", "Yeah but I kinda wish it was for a happier reason :/", "14th of January " + vars.CURRENT_YEAR, [new BlogCommentModel("ZuchiniMaster101", "Haha I get that", "15th of January " + vars.CURRENT_YEAR, [])])]),
            ],
            [BlogTags.TECHNOLOGY, BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "Munkebäckstorget - A Hidden Gem in Gothenburg",
            "Join me as I explore one of my favorite places in Gothenburg - Munkebäckstorget. From the cozy atmosphere to the exciting walking paths, there's so much to discover in this beautiful area.",
            "12th of December " + (vars.CURRENT_YEAR-1),
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Linje_1_Munkeb%C3%A4ckstorget.JPG",
            "Bo Randstedt, Wikimedia Commons",
            "13bFd",
            "Greetings Everyone!\r\n\r\n Today, I want to talk about one of my favorite places in Gothenburg, Munkebäckstorget. It might just be the coziest place in all of Gothenburg. If you haven't gone skateboarding in Solrosparken, enjoyed a coffee at Lilla Sur, or taken a stroll in Härlanda Park, then I envy the experience you will have when you finally do! \r\n\r\n The area around Munkebäckstorget is truly fantastic! As usual, I took the tram there (surprise, surprise!) hehe. I usually do my shopping at ICA Kvantum Munkebäck, since it's one of the best-stocked stores in all of Gothenburg. You can really find everything there. And when I'm not shopping so much that I can barely carry it all (hehe), I take the time to explore the surrounding area. I've heard that there are some exciting hiking trails further away too, near Redbergsplatsen. Apparently, you can walk across the cemetery. It sounds a bit creepy, but I love places that give you a little thrill. \r\n\r\nThat's all for me today! \r\nHugs, Blue",
            [],
            [BlogTags.GOTHENBURG]
        ),
        new blogCardModel(
            "The Mysteries all Around Us",
            "Read my thoughts about the mysteries of the world!",
            "30th of November " + (vars.CURRENT_YEAR-1),
            "/blogImage58399.jpg",
            "Daneel85, Getty Images",
            "97nHp",
            "Open your eyes people! All around us there are real life mysteries waiting to be discovered and solved. Ok, that maybe made me sound like a conspiracy theorist, which I am not. At least not for real…\r\n\r\nImage how big the world is though. There is so much to know, and so little that each of us knows. What might be super obvious to others can be a mystery to anyone else. The image tied to this post for example. To me it’s so mysterious! Who is the person in the image, where are they, what are they doing and where are they going? I know basically nothing about the image, but the person in it can probably answer all those questions super easily. Maybe there is more to the image than you think?\r\n\r\nWith me being a curious person, I can’t help but think about all the little mysteries all around us, just like that. What mysteries, big and small, could be hidden right in front of us, just in plain sight? What secrets is the cashier at your grocery store keeping and how private is your internet connection actually? Why is that car parked in that particular spot and is that gaming company actually doing what they claim?\r\n\r\nText, image, sound, people, companies, animals, every little thing has its own mysteries, and I love fantasizing about what is hiding just around the corner. A dream of mine is to one day stumble upon a real, real mystery, kind of like in a teenage novel. That might never happen, but who knows, maybe one day ;)\r\n\r\nThanks for reading!\r\nBlue",
            [new BlogCommentModel("Red", "Haha, I can really tell it was you who wrote this xD", "13th of December " + (vars.CURRENT_YEAR-1), [new BlogCommentModel("Red", "Oh and by the way, you might want to look at how you start your paragraphs. Some of them felt kind of weird in this post. Just a writing tip!", "13th of December " + (vars.CURRENT_YEAR-1), [])]),
             new BlogCommentModel("Sasha47", "Interesting take, maybe I’ll go looking for some mysteries myself!", "24th of December " + (vars.CURRENT_YEAR-1), []),
            ],
            [BlogTags.MYSTERY]
        ),
        new blogCardModel(
            "The Practicality of Tram Travel in Gothenburg",
            "Hello dear readers! \r\n\r\n Today, I want to write about something that I think many of you can relate to - riding trams in Gothenburg. For me, the tram is one of the best and most practical ways to get around the city. You can easily jump on the tram and go to your destination without having to worry about traffic jams or parking spots.",          
            "5th of November " + (vars.CURRENT_YEAR-1),
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/G%C3%B6teborgs_sp%C3%A5rv%C3%A4gsn%C3%A4t.svg/1184px-G%C3%B6teborgs_sp%C3%A5rv%C3%A4gsn%C3%A4t.svg.png?20200727161702",
            "Bengt-Inge Larsson, Wikimedia Commons",
            "73pQx/xxxxxxxx",
            "Hello dear readers! \r\n\r\n Today, I want to write about something that I think many of you can relate to - riding trams in Gothenburg. For me, the tram is one of the best and most practical ways to get around the city. You can easily jump on the tram and go to your destination without having to worry about traffic jams or parking spots. \r\n\r\n But there's one thing that I want to confess to you, something that may sound a little strange. I suffer from a form of OCD that prevents me from riding the same tram line twice in the same week. It may seem like a small thing, but for me, it's a really big deal. \r\n\r\n So how do I deal with this? Well, I plan my trips carefully. Before I get on the tram, I check which line will take me to my destination and which line I can take back. If I have to change trams, I try to choose a different line to avoid riding the same line twice. To remember which lines have taken each day I write down the numbers in my notepad like this: 05, 06, 10, 11. I think that it works as a fun memento for each day.\r\n\r\n Despite my OCD, I really love riding trams in Gothenburg. It's such an easy and convenient way to get around the city, and there's always something new to discover along the way. And it's so fun to see all the life moving around you, from people commuting to work to tourists exploring the city. \r\n\r\n So, in summary: the tram is really the most practical way to get around Gothenburg, even if I have my little obsession. But that doesn't stop me from discovering everything that Gothenburg has to offer! \r\n\r\nHave a wonderful day, Blue",
            [],
            [BlogTags.GOTHENBURG]
        ),   
        new blogCardModel(
            "My Amazing Day in Kviberg",
            "I recently visited Kviberg beachcenter and had the time of my life! \t It was like playing volleyball in the Caribbean, but in Sweden!",
            "29th of October " + (vars.CURRENT_YEAR-1),
            "https://images.pexels.com/photos/6180408/pexels-photo-6180408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "",
            "66kLm",
            "Hey everyone! \r\n\r\n I'm so excited to tell you about one of my new favorite places in Gothenburg: Beach Center in Kviberg! \r\n It only took 10 minutes by tram from the city center(!!). When I arrived at the hall, I was so impressed. It felt like it was the middle of summer even though it was late September?! It's almost like playing in the Caribbean, but in Sweden?! \r\n And how big was the place? My friend said it's apparently the world's largest hall for beachvolleyball, and it's apparently located on the outskirts of Gothenburg? Haha \r\n\r\n Anyway, we were a pretty large group that had gathered, and we had so much fun! The atmosphere in the hall was relaxed, and you really didn't feel any pressure to perform. Trust me, you won't be the only one who spectacularly lost the ball or fell flat in the sand! Haha \r\n\r\n One advantage of being many is that you can take breaks during the game. And the breaks were almost more fun than the game! My friend Elsa and I built sandcastles and buried each other in the sand, we had so much fun. When the time on the court was up, the whole group gathered in the bar and drank beer and just hung out. \r\nIt was truly a wonderful afternoon. \r\nHugs, Blue",
            [],
            [BlogTags.GOTHENBURG]
        ),
        new blogCardModel(
            "What I Do When I am not Blogging",
            "An overview of my entry-level game dev job at INISTR.",
            "5th of October " + (vars.CURRENT_YEAR-1),
            "/inistr.png",
            "",
            "jN7o4",
            "Hello there!\r\n\r\nSome of you might be wondering what I do when I am not traveling by tram or writing these blog posts. Well, I am actually a game developer. I studied at GU here in Gothenburg for a few years and graduated recently. Currently I am working my first job within the industry at a company called INISTR.\r\n\r\nWhile INISTR’s HQ is here in Gothenburg, it is a huge company world wide. You might never have heard of them, and that is because they don’t actually develop games. Instead, they work with other game developers to increase the profitability of their games. Things like lootboxes, microtransactions and so on are exactly INISTR’s specialities. Honestly, this is not a dream job for me. The people here are sorta quiet and I don’t think I have ever spoken to or even seen anyone at a higher position than my closest boss. It all feels very corporate and elitist. I don’t know how big this industry is, but considering INISTR is a huge and world spanning company they must be doing something right.\r\n\r\nAs I said, this is not where I see myself working for very long. I am currently at a very entry level position, and I don’t feel like I have much insight or influence over anything. Really, something almost feels off about the whole company, but I can’t quite put my finger on it.\r\n\r\nAnyways, that’s what I do 9-5 every day. Not great, but not too bad either. I will of course let you know if I find a more interesting gaming job! Also if you want to read more about INISTR, check out inistr.com.\r\n\r\nHugs,\r\nBlue",
            [new BlogCommentModel("Sasha47", "Aww man, that sounds kind of like a meh job, hope you can upgrade soon!", "15th of October " + (vars.CURRENT_YEAR-1), []),
             new BlogCommentModel("DogLoverOfGBG", "So you’re the one putting loot boxes in all my games?!", "16th of October " + (vars.CURRENT_YEAR-1), [new BlogCommentModel("Blue", "Haha no not me, I do engine stuff behind the scenes which is not directly related to the loot boxes. At least I don’t think it is…", "17th of October " + (vars.CURRENT_YEAR-1), [])]),
             new BlogCommentModel("Red", "Yeah I went on their website and that is the most boring and corporate looking site I have ever seen! Sure looks like they might make a lot of money though.", "16th of October " + (vars.CURRENT_YEAR-1), [])
            ],
            [BlogTags.TECHNOLOGY, BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "A Relaxing Walk in Änggårdsbergen",
            "Join me on a sunny afternoon stroll through Änggårdsbergen, a beautiful forest in the heart of Gothenburg. Discover the peacefulness of nature, hidden away from the hustle and bustle of the city, and find a moment of relaxation and rejuvenation.",
            "22nd of September " + (vars.CURRENT_YEAR-1),
            "https://upload.wikimedia.org/wikipedia/commons/e/ed/Grillplats_vid_sj%C3%B6n_i_%C3%84ngg%C3%A5rdsbergen%2C_G%C3%B6teborg_2010_-_panoramio.jpg",
            "Robande, Panaramio",
            "44mGh",
            "Hello dear readers! \r\n\r\n Today I want to share my latest experience in Gothenburg - a lovely walk in Änggårdsbergen! For those of you who don't know, Änggårdsbergen is a beautiful forest located in the middle of Gothenburg, near Sahlgrenska and Johanneberg. \r\n\r\n I went there with a friend on a sunny afternoon and it was like stepping into another world - everything was so green and peaceful, and all the noise and stress of the city disappeared as soon as we entered the forest. \r\n\r\n We followed the well-marked paths through the forest, stopped by a small lake and enjoyed the view and silence. It was the perfect day for a walk in the woods. Afterwards, I felt both relaxed and energized at the same time. Didn't know it was possible to feel this way. \r\n\r\n If you haven't visited Änggårdsbergen yet, I highly recommend that you do. It's a wonderful place for a walk, a run or just to get away from the city's hustle and bustle. I can't wait to go back during the spring and summer!\r\n\r\n You only need to take the tram to Sahlgrenska to find the magic entrence into the valley of the wind-flowers.\r\n\r\n Thanks for reading and I hope you get a chance to experience this amazing place too! \r\n Hugs, Blue.",
            [],
            [BlogTags.GOTHENBURG]
        ),
        new blogCardModel(
            "Q&A",
            "Hello all my wonderful readers! Blue here, and I'm so happy that you've sent in your questions for my first Q&A post!",
            "1st of August " + (vars.CURRENT_YEAR-1),
            "https://c.pxhere.com/images/75/bd/ccd20e28c7f70ff538ac4be5b719-1640023.jpg!d",
            "",
            "91hJk",
            "Hello all my wonderful readers! Blue here, and I'm so happy that you've sent in your questions for my first Q&A post! \r\n You've been so supportive since I started blogging, and I can't thank you enough for all the support and encouragement. \r\n \r\n So now it's time to dive into your questions and hopefully learn a little more about me while I get to know you. Let's get started! \r\n\r\n Question 1: What made you start blogging? \r\n Answer: I've always loved writing and expressing myself in different ways, and blogging seemed like the perfect way to do it. Plus, I've always wanted to share my experiences and thoughts with others, and blogging has given me the platform to do that. \r\n\r\nQuestion 2: What's your favorite thing about blogging? \r\n Answer: It's so hard to choose just one, but I think my favorite part is getting to know my readers and hearing their opinions and feedback on my posts. It's so fun to know that I can impact and inspire people through my words. \r\n\r\nQuestion 3: When is your birthday? \r\nAnswer: I don't think I'm quite comfortable answering that one in detail here on the internet, but I can tell you that I'm born in the same year as Red. He will happily tell you that any time he has the chance: \"WHERE ARE MY " + (vars.CURRENT_YEAR - 26) + "-ers AT?!\".  \r\n\r\nQuestion 4: What's your favorite dish? \r\nAnswer: Oh, that's a tough one! I really love all food, but if I had to choose one favorite, it would probably be sushi. It's so fresh and delicious! \r\n\r\nQuestion 5: What's your favorite music genre? \r\nAnswer: I listen to all kinds of music depending on my mood and the situation, but my favorite genre is R&B and soul. It always makes me feel so relaxed and happy. \r\n\r\nQuestion 6: What are your future plans for your blog? \r\nAnswer: I want to continue to grow and develop my blog, reach more people, and create even more engaging and inspiring content. I also want to continue learning and improving my writing skills, and maybe even publish a book someday! \r\n\r\nQuestion 7: What's the best advice you've ever received? \r\nAnswer: The best advice I've ever received is to always follow my heart and not let fear or uncertainty stop me from pursuing my dreams. Sometimes it can feel scary to take that leap into the unknown, but it's only through taking risks that we can experience the greatest successes and joys in life. \r\n\r\nQuestion 8: What are your plans for the future? \r\nAnswer: Right now, I'm working on improving my writing skills and continuing to develop my blog. I also want to travel more and explore new places, both within and outside of Sweden. But most importantly, I want to continue to be happy and healthy and take care of myself and those I care about. \r\n\r\nThat's it for my first Q&A, thank you so much for sending in your questions. Keep following my blog for more content and updates, and don't hesitate to contact me if you have any more questions. \r\n\r\nHave a fantastic day, everyone! \r\nHugs, Blue",
            [],
            [BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "The Most Trippy Images",
            "I have a new fascination: Magic eye images! They are so cool!",
            "17th of July " + (vars.CURRENT_YEAR-1),
            "https://live.staticflickr.com/7068/6979483429_b6a94a31a5_b.jpg",
            "queenieandthedew, Flickr",
            "vV9Zm",
            "The other day I randomly thought of an episode of some old kids show. I don’t remember much about the show or the episode, but I do remember that there was this painting that had a \”hidden message\” or something if you looked at it the right way. That got me thinking if something like that was possible in real life, and as it turns out it is!\r\n\r\nApparently there is this thing called \”autostereograms\” which is exactly like what was described in the kids show. If you look at them the right way, hidden images appear! I used one as the image for this post. If you try to look \”behind\” the image, after some time, you can make out an elephant. The coolest things about autostereograms are that the hidden image is right there, but still hidden, and that when you see it everything becomes 3D. I have spent the whole afternoon looking at different images like this, my eyes are almost getting tired from it.\r\n\r\nIf you are having trouble seeing the elephant, it might be because the image is too small on my blog, or because your viewing technique is wrong. Wikipedia actually has a pretty long segment on viewing techniques on their page for autostereograms. I read it when researching on the topic, and apparently you can even do autostereograms with words to hide other words in an image. So cool!\r\n\r\nAnyways, I just wanted to share this find with you all so that you too can see some 3D elephants hidden in random dots. Good luck finding it!\r\n\r\nBlue",
            [new BlogCommentModel("Mattinator", "Oh wow, it took me a while but I can totally see the elephant now! It really is trippy…", "19th of July", []),
             new BlogCommentModel("DogLoverOfGBG", "I just can’t figure out how to do this :(", "20th of July " + (vars.CURRENT_YEAR-1), [new BlogCommentModel("Blue", "Don’t worry, give it some time, it took me a good while to figure it out the first time but once you have it down it becomes much easier!", "20th of July " + (vars.CURRENT_YEAR-1), [])]),
            ],
            [BlogTags.MYSTERY, BlogTags.OTHER]
        ),
        new blogCardModel(
            "Black Mirror and my Tattoo",
            "Have you watched the TV-series Black Mirror? I've actually got a tattoo based on one of the episodes!",
            "11th of July " + (vars.CURRENT_YEAR-1),
            "https://images.unsplash.com/photo-1441804238730-210ce1c2cc00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "",
            "00tat",
            "I have to tell you about one of my favourite TV-shows, Black Mirror. It's an anthology series, meaning each episode is standalone. The series explores how technology can shape our future and the episodes are often dystopian in nature.\n\n One of my favourite episodes is from season 2. It's called White Bear and it's about a woman who wakes up with no memory of who she is. When she goes outside she realises everyone is watching her, looking out the windows of their houses, passerbys. Everyone. She does not know why everyone is looking at her since she has no memory. I won't tell you anything more, but there is a good reason why she is being watched.\n\n Throughout the episode there is a symbol that is seen several times, and because the episode really resonated with me, I decided to tattoo this symbol. It's on the back side of my left shoulder.\n\n",
            [],
            [BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "Exploring Gothenburg",
            "Hello everyone! \r\n\r\n Today is Sunday, and do you know what we Gothenburgers do on Sundays? We explore our hometown!",
            "2nd of July " + (vars.CURRENT_YEAR-1),
            "https://live.staticflickr.com/8183/28670882820_1cab8687d9_b.jpg",
            "Maria Eklind, Flickr",
            "77gTc",
            "Hello everyone! \r\n\r\n Today is Sunday, and do you know what we Gothenburgers do on Sundays? We explore our hometown! Now, I know what some of you who know me might be thinking - am I really a true Gothenburger? While I may not have lived here my whole life, I do believe I have been here long enough to call myself one. \r\n\r\n Anyway, like a true Gothenburger, I decided to explore where the tram network could take me. I had heard a friend talk about Frihamnen at a party on Friday and decided I wanted to explore the place more. And I definitely recommend you go there too! Now, I know what you're thinking - is it really worth going to Lindholmen? Is there anything to see there? \r\n\r\n Let me tell you! The first thing I noticed when I got off the tram at Frihamnen was the raw charm and industrial feeling. It's so cool that a place like this can exist in Gothenburg. It felt like a little Berlin. It's a really creative and inspiring environment, and I felt inspired just being there. \r\n\r\n So, what is there to do in Frihamnen? \r\n\r\nNow, for my new segment \"Blue Recommends \" (read in a super cool speaker voice) \r\n\r\n First and foremost, have you seen the outdoor pools? You can actually swim in the middle of the city, so cool! \r\n It's apparently called Pöl Harbour? Gothenburg, seriously! \r\n And maybe you've heard of Bananpiren. They apparently have concerts there quite often, but otherwise, it's a pretty deserted place. But you know me, deserted places can also be pretty fun haha... \r\n\r\n After exploring for a while, I got hungry and found a small restaurant, I think it was called Paradis? Anyway, they had the craziest buffet. So, if you like Persian food, it's a must-visit!\r\n\r\n I can really recommend Frihamnen to anyone looking for a unique and different experience in Gothenburg. It's definitely a place I will visit again. \r\n\r\n And before I finish, I want to remind you of my latest blog post where I shared why I'm called Blue. After that post, some of you had questions, so I thought we could do a Q&A in the next blog post, so stay tuned for that!\r\n\r\n Thanks for reading, and have a continued great day! \r\n Hugs Blue!",
            [],
            [BlogTags.GOTHENBURG]
        ),
        new blogCardModel(
            "Why I call myself Blue",
            "Hey hey, how cool that YOU are checking out my blog! \r\n\r\n Since my last post, many people have asked why I call myself Blue? Am I an alien from the planet Blue? Or am I just a huge Avatar fan?",
            "28th of June " + (vars.CURRENT_YEAR-1),
            "/blueProfile.png",
            "",
            "321",
            "Hey hey, how cool that YOU are checking out my blog! \r\n \r\n Since my last post, many people have asked why I call myself Blue? \r\n  Am I an alien from the planet Blue? \r\n Or am I just a huge Avatar fan? \r\n Many are also wondering if it's my real name. \r\n \r\n In this post, you'll get the answer! \r\n\r\n  It's actually not as spectacular as you might think. The reason why I call myself Blue is that I've always been a bit of a frosty person 🥶 \r\n I'm always cold, whether it's summer or winter. So when I was younger, I always bought blue clothes because I thought it was the perfect color. I even dreamed of dyeing my hair blue. But my parents said no, thank you mum and dad for that discision! 🫶 \r\n So when I was starting my blog, I was thinking about what to call it. Since I've always called myself Blue among my friends, it felt completely natural to name my blog Blue. Plus, it sounds a bit cool and mysterious, don't you think? I also feel that I don't want to share my real name here. Seriously, you don't know who the creeps on the internet are. They do everything to steal your information! \r\n\r\n So there you have it, the reason why I call myself Blue is that I'm always cold and love to dress in blue. A pretty simple explanation really, but hey, it works for me! \r\n\r\n Thanks for reading and stay warm, folks! 🔥 \r\n  Hugs, Blue",
            [new BlogCommentModel("Ashley", "What made you start blogging?", "28th of June " + (vars.CURRENT_YEAR-1), [])
                , new BlogCommentModel("Zara", "What's the best advice you've ever received?", "29th of June " + (vars.CURRENT_YEAR-1), [])],
            [BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "<title missing>",
            "<description missing>",
            "<date missing>",
            "/base64.jpg",
            "",
            "03oNE",
            "",
            [new BlogCommentModel("Red", "What is this? Very curious indeed!", "18th of March " + (vars.CURRENT_YEAR-1), []),],
            [BlogTags.MYSTERY]
        ),
        new blogCardModel(
            "Board Game Night",
            "I recently hosted a board game night where I introduced my new friends from work to my best friend, Arvid. We had a lot of fun playing different games, including Mastermind, and everyone was getting along great. However, towards the end of the night, things took an unexpected turn, and we ended up having to cut the night short. It was a little disappointing, but I'm hopeful that Arvid and my new friends can put their differences aside and become friends in the future.",
            "24th of June " + (vars.CURRENT_YEAR-1),
            "https://images.pexels.com/photos/4004426/pexels-photo-4004426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "cottonbro studio",
            "03oNY",
            "Recently, I hosted a board game night where I introduced some of my new friends from work to my best friend, Arvid. \r\n \r\n We had an assortment of games to choose from, including classics like Monopoly and newer games like Settlers of Catan. However, we started with a game of Mastermind, which was a hit with everyone. For those who have not played it before, it's a game where one player sets a secret code, and the other player tries to guess it by making a series of guesses. With every guess, the code maker provides feedback, telling the code breaker how many of their guesses are correct and how many are in the right position. The code breaker then uses this feedback to make a new guess, and the game continues until the code is cracked. We all enjoyed trying to outsmart each other and had a great time strategizing and guessing. \r\n \r\n As we played, I introduced Arvid to my new friends, including Nelly, Johan, and Alex. Arvid is usually friendly and easygoing, but things took a turn when he and Alex had a disagreement over a game of Monopoly. Alex accused Arvid of cheating, and Arvid took offense to the accusation. \r\n \r\n Despite my efforts to calm the situation, the tension between Arvid and Alex remained, and it started to affect the mood of the whole group. We decided to take a break and indulge in some delicious snacks that we had prepared earlier. We had a spread of chips and dip, crackers and cheese, and some homemade pizza. \r\n \r\n After the break, we attempted to resume playing board games, but the atmosphere remained tense. Arvid and Alex continued to exchange glares, and the rest of us felt awkward and uncomfortable. We tried to change the subject, but the tension remained. \r\n \r\n In the end, we decided to call it a night early, as the tension was too much to bear. As my new friends left, I apologized to Arvid for the conflict that had arisen, but he remained upset and insisted that Alex was in the wrong. I felt disappointed that the night had ended on a sour note. I don’t know why Arvid behaves this way with my new friends, it like he does not trust them at all… \r\n \r\n Anyway, I hope they soon can find a way to be friends.",
            [],
            [BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "New Photo Album!",
            "Since I have been taking more and more photos recently, I thought I'd start an album on my blog where I share my photos. I hope you enjoy them!",
            "13th of June " + (vars.CURRENT_YEAR-1),
            "/albumCover.png",
            "",
            "1uk4s",
            "Combining my passions of web development and photography I have decided to create albums for the blog! It will be spontaneous and definitely no master project but will still be my way of sharing my good times here in Gothenburg with my friends. Hope you enjoy and share tips if you have any!\n\nBelow are my first albums!\nbluesblڍЩ/םƁAum-9WеϪߡ+\nСػ߯ʸֵڸFog.cǨ*Ƞefbum-010929\nblx޾ķ+рځ̾֗g.com/albuȁw޿2@ͼ323\n\n",
            [],
            [BlogTags.PERSONAL]
        ),
        new blogCardModel(
            "Programming challenge",
            "As you might know, I do a lot of programming at work. I want you guys to have a chance to try it out too! So I've created a challenge for you. I hope you enjoy it!",
            "2nd of June " + (vars.CURRENT_YEAR-1),
            "/numbers.png",
            "",
            "54Rgr",
            "So at work I do a lot of programming, and I thought it might be fun for you guys to get a taste of what it is like being a programmer.\n\n        I have created a kind of puzzle that isn’t too difficult (hopefully!) but feel free to ask in the comments if you want any hints on ways to tackle it.\n\nSo, in this puzzle you need calculate a number from a long number string which I’ll provide for you below. For each number there is a rule, which should be applied to all occurances of the number in the string. Once all occurances of say 0 have been applied, then take that now modified string and apply the one-rule on all occurances of ones, so don't worry about ones until you've done all zeroes, and once you've done the zero-rule, you do not revisit it again. Now do this for all the rules in the order they're presented here: \n\n 0: numbers around a zero should be swapped, so …75063… becomes …76053…\n\n1: The following two numbers should be added together. If the sum is greater than nine, leave it as 9, so …41356… becomes …4186… and …81888… becomes …8198…\n\n2: All twos become the number a step ahead of them, so …1234… becomes …1334…\n\n3: If there is a seven within the five upcoming numbers, remove the three, else do nothing, so ...239876… becomes …29876…\n\n4: Calculate the sum of the four digits ahead and if their sum is even, make the four into an eight, so …748376… becomes …788376…\n\n5: For each five, remove the digit that is immediately behind the five, so …9654… becomes …954…\n\n 6: Move each six to the very end of the number.\n\n7: Change each seven into the distance the nearest prime number that is ahead. If the distance is greater than nine, leave it at nine, so …97643… becomes …93643… since the three is the first prime number and it is three steps ahead of the seven. If there is no prime ahead, then change it to a zero.\n\n8: At the first occurrence of an eight, count the number of eights (including the first one) and the sum modulo ten is the number to replace the first eight. All other eights are removed.\n\n9: For each nine, look forward in the number and find a one. If you find a one, destroy both the nine and the one. Now move on the next nine and keep pairing nines and ones until you run out of either nines or ones.\n\nFinally, sum all the digits and that’s your answer!\n\n So for the number 31415926535 the string before the sum looks like this: 3559556, which sums to 38.\n\nI want you to try and find the sum of this monstrosity:\n\n" + vars.programmingChallengeLargeNumber + "\n\n Comment your answer below, good luck:)",
            [
                new BlogCommentModel("Red", "Woah, isn't this cool! Are you doing more advanced than this at work?? INSANE.", "15th of February " + (vars.CURRENT_YEAR-1), []),
                new BlogCommentModel("Sasha47", "I tried doing it on paper, but that number is WAY too long!", "16th of February " + (vars.CURRENT_YEAR-1), [new BlogCommentModel("Blue", "Yes, it's going to take too long if you do it with pen and paper. You need to create some sort of script to do it. I like using Python for these sorts of things!", "17th of February " + (vars.CURRENT_YEAR-1), [])]),
                new BlogCommentModel("DogLoverOfGBG", "I think I might have answer, 1564", "19th of February " + (vars.CURRENT_YEAR-1), [new BlogCommentModel("Blue", "No, not quite, the final sum should only be three digits long. Keep trying!", "19th of October " + (vars.CURRENT_YEAR-1), [])]),
            ],
            [BlogTags.TECHNOLOGY]
        ),
        new blogCardModel(
            "My Top 10 Emojis",
            "Haha, I came across a fun tool on TikTok that shows your top 10 emojis based on your messaging history, take a look at mine!",
            "19th of May " + (vars.CURRENT_YEAR-1),
            "https://www.publicdomainpictures.net/pictures/160000/velka/emoji-love-heart.jpg",
            "",
            "43mKw",
            "Haha, I came across a fun tool on TikTok that shows your top 10 emojis based on your messaging history, and these were mine!\n\n" + vars.emojiString + "\nWhich emojis do you find yourself using the most?",
            [new BlogCommentModel("Red", "Heard that you might have an Q&A comming, so I was wondering, what are your future plans for your blog?", "21st of June " + (vars.CURRENT_YEAR-1), []),
            new BlogCommentModel("Emma97", "What's your favorite music genre?", "22th of June " + (vars.CURRENT_YEAR-1), [])],
            [BlogTags.OTHER]
        ),
        new blogCardModel (
            "Welcome to my new blog",
            "Hey hey! Welcome to my new blog! \r\n \r\n Here, I'll be sharing everything about my life. I'm super excited to write, and I hope that YOU will want to follow my life here. I'm the kind of person who loves to try new things and explore the world around me. So on my blog, I'll be sharing my experiences and adventures so that you too can be inspired to step out of your comfort zone. I love to party and hang out with my friends. So I'll be sharing my party tips and how you can have a great time without breaking the bank. \r\n\r\n I also hope to use my blog as a platform to address important social issues affecting young people, such as equality, discrimination, mental health, and much more. For me, it's important to take a stand and be a voice for what I believe in. So, what can you expect from my blog? Lots of laughter, inspiration, and tips on how you can live your life to the fullest. I want my blog to be a place where you feel at home, so don't hesitate to leave a comment and share your thoughts. \r\n \r\n Thanks for stopping by and welcome to my world!  \r\nHugs, Blue",
            "11th of May " + (vars.CURRENT_YEAR-1),
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Wikipedia_welcome_committee_topicon_graphic.PNG?20150327123758",
            "Bfpage, Wikimedia Commons",
            "38dFs",
            "Hey hey! Welcome to my new blog! \r\n \r\n Here, I'll be sharing everything about my life. I'm super excited to write, and I hope that YOU will want to follow my life here. I'm the kind of person who loves to try new things and explore the world around me. So on my blog, I'll be sharing my experiences and adventures so that you too can be inspired to step out of your comfort zone. I love to party and hang out with my friends. So I'll be sharing my party tips and how you can have a great time without breaking the bank. \r\n\r\n I also hope to use my blog as a platform to address important social issues affecting young people, such as equality, discrimination, mental health, and much more. For me, it's important to take a stand and be a voice for what I believe in. So, what can you expect from my blog? Lots of laughter, inspiration, and tips on how you can live your life to the fullest. I want my blog to be a place where you feel at home, so don't hesitate to leave a comment and share your thoughts. \r\n \r\n Thanks for stopping by and welcome to my world!  \r\nHugs, Blue",
            [new BlogCommentModel("Natalia", "Why do you call yourself Blue? We all know your real name...", "13th of June " + (vars.CURRENT_YEAR-1), [])],
            [BlogTags.OTHER, BlogTags.PERSONAL]
        ),

    ]

    // Gets blog from database if it exists, else throws an error
    getCardFromSlug(slug: string): blogCardModel {
        var returnBlog: blogCardModel | undefined = this.cards.find((card) => card.url === slug)

        if (returnBlog !== undefined) {
            return returnBlog
        } else {
            return new blogCardModel("", "No blog post with this ID", "", "", "", "", "", [], [])
        }
    }

    getCards(): blogCardModel[] {
        return this.cards
    }
}

export default BlogCardDB