import { Container } from 'react-bootstrap';

import styles from '/styles/HumansOfICS.module.scss';
import humanOfICS from '/styles/HumanOfICS.module.scss';



export default function HumansOfICS() {
    return (
        <Container>
          
          <div className={styles.banner}>
              <h1>Humans of ICS</h1>
          </div>

          <div className={humanOfICS.card}>
            <img
              src="/assets/img/humans-of-ics/2021-2022/nathan_nguyen.jpeg"
            />
            <div className={humanOfICS.card__text}>
              <h1>Nathan Nguyen</h1>
              <p>This edition’s star of Humans of ICS is Nathan Nguyen!</p>
              <p>
                We hope you enjoy reading about Nathan and his passion to help others through pursuing Informatics, victory in placing 3rd at ZotHacks, and experience as a top 1% autochess player.
              </p>
              <p>Year: 2nd</p>
              <p>Major: Informatics</p>
            </div>
          </div>
          <div className={humanOfICS.main}>
            <p class="h5 mb-4">
              Emily Doan: Hello everyone! Welcome to ICS Student Council’s first feature of Humans of ICS. Today, we have Nathan. Nathan, can you start off by introducing yourself?
            </p>

            <p class="h5 mb-4">
              Nathan Nguyen: Yea, sure. Hello everyone, I’m Nathan Nguyen, pronouns he/him/his, and I’m a 2nd year Intended Informatics major.
            </p>

            <p class="h5 mb-4">
              E: Why did you choose Intended Informatics as your major?
            </p>

            <p class="h5 mb-4">
              N: Fun fact, I actually applied to UCI as a political science major because I thought I liked history, US government, and all that good stuff until I realized being a lawyer was the idealistic job I would have to do and I didn’t really like that, so I planned on switching into Computer Science until my ICSSC mentor from last year, who’s an Informatics major, explained what it was to me. I was really intrigued by the idea that Informatics was a type of “jack of all trades” ICS major, in which it was not strictly programming, but also understanding users and their experiences and design which really interested me since I tend to care about what other people think and how to help them out, as I desire to make a difference, no matter how big or small. She was a really good mentor and she inspired me to switch from CS to Informatics not just since I really did not enjoy coding too much, but also because her passion to become a product manager and UI/UX designer as well as my passion in caring other people’s experiences really swayed me to follow in her footsteps.
            </p>

            <p class="h5 mb-4">
              E: Your mentor sounds like a wonderful person! I’m glad she helped you figure out what you want to do. This brings us into the next question: what are you passionate about and where did you develop that passion?
            </p>

            <p class="h5 mb-4">
              N: Truth is, I am really not too passionate about anything or like a specific topic or hobby. I could never find extreme interest in the many things life has to offer, but I guess something that I happen to really care about, if it counts and I kinda mentioned in my previous response, is making a positive difference to other people. I had a bad tendency to put others first before myself, and so how they felt mattered to me. Although I started putting myself first recently so that I could take care of myself more, part of me still prioritizes others a lot, especially when I hurt them in some way. It really upsets me knowing when my actions have a negative effect on others, and so I self-reflect often and do my best to appeal to others, particularly those closest to me, though I also realized I can not always appeal to even those I care about most and sometimes I have to move. I guess this passion of mine is a continuous cycle, that helps me dive into interacting with others, new or old, learn from others, make memories and enjoy the experience whether good or bad, because that’s what life is all about; it’s not about me, it’s about us. All of us.
            </p>

            <p class="h5 mb-4">
              E: Yeah, I definitely feel you. Just the passion to help others has led me to choose my current career interest as well. What is one piece of advice you would give yourself before coming to UCI?
            </p>

            <p class="h5 mb-4">
             N: Although this may be unpopular, it would be to work harder and to not take it easy on myself. In my case, I was too relaxed during the Zoom University, and so I didn’t do too well in my classes. Too many people throughout the years have told me to take it easy on myself. To not be too harsh on myself and give myself more credit. But I haven’t been doing as much and as well as I should be. Am I really doing the best I can? I needed to do better. Even though this may leave a mental and physical toll, I believe in pushing myself to realize my capabilities while finding balance in giving myself the necessary rest and fun I wanted, though essentially, I needed to work a lil harder, as I’m entering adulthood and it’s no longer entirely fun and games.
            </p>

            <p class="h5 mb-4">
              E: Now moving onto the more personalized questions, you had mentioned that you placed third place at your first hackathon. Congrats! How did that go and how did you feel when you found out you had placed third?
            </p>

            <p class="h5 mb-4">
              N: I really enjoyed it! Although I was looking forward to an overnight hackathon, the experience was still great, as it forced me to make a functional website given a certain amount of hours and it really brought the speedrunner out of me. It was stressful at one point since I worked on the back-end alone and even though my mentor helped me a lot, he had to leave halfway and so I was like stuck on one part of my code for literally three hours straight. We ended up failing to merge everything together and our website kinda broke, but we fixed it so that, actually let me clarify what we made. We made an online whiteboard called ZotBoard, in which basically, if you’re familiar with an online whiteboard, it is what the name implies: a collaborative online whiteboard in which people from other computers can draw or write things on it and everyone on the website will be able to see updates, which was our biggest challenge implementing. We ended up not having the collaborative part or connection working, so we ended up having a single whiteboard website basically. After looking at everyone’s projects during expo, it was funny, I predicted that our group would get third place so I was not really too surprised but relieved that we still placed despite our project not being what we wanted it to be, but in the end, I am content with the experience and what I have learned from it all.
            </p>

            <p class="h5 mb-4">
            E: I noticed that you have started the development process of your personal website? What languages and/or frameworks are you looking to implement? What is the design vibe you’re going for?
            </p>

            <p class="h5 mb-4">
              N: Definitely the basic languages of HTML, CSS, and Javascript for sure. I’m still relatively new to web dev[elopment]. Frameworks, definitely React and Bootstrap but I still need to familiarize myself more with them before getting into developing my personal website since I’m taking it slowly. My design vibe will probably be monochrome, just like my personality, or basically reflecting my vibe as a person because I want it to be a simple website about me.
            </p>

            <p class="h5 mb-4">
              E: I also heard you’re an autochess pro. What would you say is your level of skill when it comes to autochess?          </p>

            <p class="h5 mb-4">
              N: Well, I usually play one specific autochess, which is Teamfight Tactics, basically a League of Legends autochess. I’m Masters, which is the third highest rank in the game and actually like rank 1600 or something in North America. It’s just a hobby of mine that I enjoy doing since it’s pretty similar to chess and requires strategic thinking. The other autochess game I also play is called Super Auto Pets, which features pets and is pretty wholesome and cute, I would recommend trying that specific game out to anyone who wants to get into autochess.
            </p>

            <p class="h5 mb-4">
              E: Alright, last personalized question and it might be random, but name your top three anime and describe why they are your favorite.
            </p>

            <p class="h5 mb-4">
              N: Let’s see, first one has to be A Silent Voice, I relate to the main character too much. Then Neon Genesis Evangelion because I enjoyed how they intertwined action and many powerful themes such as depression plus all the characters are cool. Last one would probably be Spirited Away because Studio Ghibli movies hit different!
            </p>

            <p class="h5 mb-4">
              E: Studio Ghibli definitely belongs in my heart. Moving onto rapid fire questions! Early-riser or night-owl?
              <br/>
              N: Definitely night.
            </p>

            <p class="h5 mb-4">
              E: Spicy or sweet?
              <br/>
              N: Sweet. I have a bad sweet tooth.
            </p>
            
            <p class="h5 mb-4">
              E: Xbox or Playstation?
              <br/>
              N: Xbox.
            </p>

            <p class="h5 mb-4">
              E: Twitch or YouTube?
              <br/>
              N: I use both often, but Twitch.
            </p>

            <p class="h5 mb-4">
              E: Talking or texting?
              <br/>
              N: I guess talking.
            </p>

            <p class="h5 mb-4">
              E: RPG or FPS?
              <br/>
              N: FPS.
            </p>

            <p class="h5 mb-4">
              E: iOS or Android?
              <br/>
              N: iOS.
            </p>

            <p class="h5 mb-4">
              E: Cake or ice cream?
              <br/>
              K: Ice cream.
            </p>

            <p class="h5 mb-4">
              E: Summer or winter?
              <br/>
              N: Summer, I can’t stand the cold.
            </p>

            <p class="h5 mb-4">
              E: Coffee or boba?
              <br/>
              N: Boba.
            </p>

            <p class="h5 mb-4">
              E: Staying in or going out?
              <br/>
              N: This is difficult, but I guess going out.
            </p>

            <p class="h5 mb-4">
              E: And that concludes our interview! Thank you so much Nathan for being our first feature for Humans of ICS!
              <br/>
              N: For sure, thank you for having me here at Humans of ICS!
            </p>
          </div>
          <p class="h5 mb-5">
            Thanks to Nathan for being a part of Humans of ICS and thank you for reading this edition of Humans of ICS! Follow
            <a href="https://www.instagram.com/nathann.nguyen"> Nathan</a> (@nathann.nguyen) and <a href="https://www.instagram.com/icssc.uci/">ICSSC</a> (@icssc.uci) on Instagram! <br/>
          <br/>
            Nominate yourself or your friends for <a href="https://bit.ly//ICSSCHumansICS">Humans of ICS</a>. See you next time!
          </p>
          
        </Container>
    );
}