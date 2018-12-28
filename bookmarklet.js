const area = document.createElement('textarea')
area.style.display = 'block'
document.querySelector('section > .inner_holder').prepend(area)
const nodes = [].slice.call(document.querySelectorAll('.position'))
    .filter(function(node) {
        return !node.querySelector('a.position-box').classList.contains('is_open')
    })
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
const teamName = document.querySelector('h1').textContent.replace('Group: ', '')
const poll = setInterval(function() {
    if (people.length == nodes.length) {
        area.value = '# ' + teamName + '\n\n' + people.map(function(p) {
            return '* ' + p.name + ', ' + p.position + ' ![picture](' + p.face + ')'
        }).join('\n')
        clearInterval(poll)
        alert("Done!")
    }
}, 1000)