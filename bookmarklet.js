const area = document.createElement('textarea')
area.style.display = 'block'
document.querySelector('section > .inner_holder').prepend(area)
const nodes = document.querySelectorAll('.position')
const people = []
nodes.forEach(function(node) {
    const w = window.open(node.querySelector('a.position-box').href)
    w.onload = function() {
        const face = w.document.querySelector('.profile-hero-image').src
        people.push({
            name: node.querySelector('.full-name').textContent,
            position: node.querySelector('.job-title').textContent,
            face: face
        })
        w.close()
    }
})
const poll = setInterval(function() {
    if (people.length == nodes.length) {
        area.value = JSON.stringify({
            name: document.querySelector('h1').textContent.replace('Group: ', ''),
            people: people
        })
        clearInterval(poll)
        alert("Done!")
    }
}, 1000)