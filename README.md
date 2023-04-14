# tldraw take-home

1. Create a new repository based on this template (**Use this template** > **Create a new repository**)
2. Clone the repository and open in your editor
3. Install dependencies with npm (`npm install`)
4. Start the local development server (`npm run dev`)
5. Follow the instructions below.

# Instructions

tldraw is working on a new feature for our white-boarding app: **stickers!**

You've been assigned the ticket:

![reference](https://github.com/tldraw/tldraw-takehome/raw/main/reference.gif)

> Stickers are little shapes that you can stamp down on a drawing to give a quick thumbs up, share some love, vote on a topic, or bring some attention to part of the page. After choosing a sticker, a user can click on the page to place the sticker down.

---

1. In this repository's project, implement the basics of the feature as shown and described above. Use **regular HTML and CSS**. Don't use HTML canvas and don't use any third party libraries like Paper.js. Use emojis for the stickers (🌟, 🔥, 💖, 👍, 👎).
2. Next, think beyond the basic specification written in the ticket. What else does the demo show? What else might this stickers feature need before it was ready for people to use? Come up with a few ideas. Create issues in your from these issues ofin the form of user stories, for example “as a user I want to delete a sticker”.
3. As a **stretch goal**, pick one of the stories you created in step two and implement it in your app.

Good luck!

---

# Approach
I took this challenge as opportunity to stretch my self-learning and create the replica in React.

## Resources
I watched Mike Dane's Giraffe Academy on Youtube to learn javascript and SQL and used his introduction to React to guide how I put this together. In some instances I used chatGPT to better understand how useState and useEffect work to make the app work functionally. 

## challenges
File Structure - I'm still learning node and how to install packages and organise the files appropriately. For example, src. vs. compnonents vs. gitignore etc. I'm still working on how best to scope and modularise functions to refactor my code. 
Clipboard - I'm not sure using the clipboard was the easiest route to put this page together but copy/paste felt intuitive for a user. However, this led to being able to copy any text on to the page. 
For next time - I think next time I would take TDD approach to putting this together and may have been this easier to prevent bugs (like being able to paste text outside of app on to the page) next time.

## How to use this repo
clone repo and use the local host address to view the page. 
``` terminal
git clone 'https://github.com/cameochoquer/FAC_tldraw_challenge'
```
``` terminal
npm run dev
```
From here, copy the local host url into your browser
