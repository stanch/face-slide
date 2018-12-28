# Setup

## Namely

You can automatically generate face slides from Namely teams. Here’s how!

### One-time setup

Create a bookmark and insert the following code instead of the URL:

```javascript
javascript:void function(){function e(e){const t=JSON.parse(e.querySelector(".profile-hero").parentNode.dataset.reactProps);return{name:t.profile.fullName,position:t.profile.jobTitle,face:t.profile.imgSrc}}function t(e){return"* "+e.name+", "+e.position+" ![picture]("+e.face+")"}const n=document.createElement("textarea");if(n.style.display="block",document.querySelector(".profile-hero")%3Fdocument.querySelector(".profile-hero").insertAdjacentElement("afterend",n):(document.querySelector("section > .inner_holder").prepend(n),n.style.width="100%25"),document.querySelector(".profile-hero"))n.value=t(e(document));else{const o=[],r=[].slice.call(document.querySelectorAll(".position a:first-child")).map(function(e){return e.href}).filter(function(e){return!e.endsWith("%23")});r.forEach(function(t){const n=window.open(t);n.onload=function(){o.push(e(n.document)),n.close()}});const c=document.querySelector("h1").textContent.replace("Group: ",""),l=setInterval(function(){o.length==r.length%26%26(n.value="%23 "+c+"\n\n"+o.map(t).join("\n"),clearInterval(l),alert("Done!"))},1e3)}}();
```

(This is called a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) and no, it will not steal your passwords!)

### Usage

#### Method 1 — you have a team set up correctly on Namely

1. Go to Namely and open the “Teams” page.
2. Click on the team you want to display.
3. Click on the bookmark you created.
4. New tabs will open to fetch full resolution face images. If only one tab opens, you need to disable popup blocking in your browser (for the current page) and repeat the process.
5. Once everything is done and the extra tabs close, go back to the original tab and copy the code that appeared in a box at the top of the page.
6. Open *FaceSlide* and paste the code.
7. You can tweak the code as you like to fix inaccuracies and typos. Alternatively, you can also edit the rendered names and positions directly (but not that if you update the code, your direct updates will be lost).
8. Adjust the window size and take a screenshot. Done!

#### Method 2 — you want to display and ad-hoc team

1. Open *FaceSlide* and enter the team name like so:

   ```
   # My Awesome Team
   ```
2. Go to Namely and open the profile page for the person you want to add.
3. Click on the bookmark you created.
4. Copy the code that appeared in a box at the top of the page.
5. Go back to *FaceSlide* and paste the code below the team name. *Make sure to leave a blank line between the team name and the first person on the team.* It should look like so:

   ```
   # My Awesome Team

   * Person 1, Engineer ![picture](...)
   ```
6. Repeat steps 2–5 for the rest of the team.
7. You can tweak the code as you like to fix inaccuracies and typos. Alternatively, you can also edit the rendered names and positions directly (but not that if you update the code, your direct updates will be lost).
8. Adjust the window size and take a screenshot. Done!