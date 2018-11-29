# Setup

## Namely

You can automatically generate face slides from Namely teams. Here’s how!

### One-time setup

Create a bookmark and insert the following code instead of the URL:

```javascript
javascript:void function(){const e=document.createElement("textarea");e.style.display="block",document.querySelector("section > .inner_holder").prepend(e);const t=document.querySelectorAll(".position"),o=[];t.forEach(function(e){const t=window.open(e.querySelector("a.position-box").href);t.onload=function(){const n=t.document.querySelector(".profile-hero-image").src;o.push({name:e.querySelector(".full-name").textContent,position:e.querySelector(".job-title").textContent,face:n}),t.close()}});const n=setInterval(function(){o.length==t.length%26%26(e.value=JSON.stringify({name:document.querySelector("h1").textContent.replace("Group: ",""),people:o}),clearInterval(n),alert("Done!"))},1e3)}();
```

(This is called a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) and no, it will not steal your passwords!)

### Usage

1. Go to Namely and open the “Teams” page.
2. Select the team you want to display — the page should show the org chart of that team.
3. Click on the bookmark you created.
4. New tabs will open to fetch full resolution face images. If only one tab opens, you need to disable popup blocking in your browser (for the current page) and repeat the process.
5. Once everything is done and the extra tabs close, go back to the original tab and copy the code that appeared in a box at the top of the page.
6. Open *FaceSlide* and paste the code.
7. Adjust the window size and take a screenshot. Done!