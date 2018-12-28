const area = document.createElement('textarea')
area.style.display = 'block'

if (document.querySelector('.profile-hero')) {
    document.querySelector('.profile-hero').insertAdjacentElement('afterend', area)
} else {
    document.querySelector('section > .inner_holder').prepend(area)
    area.style.width = '100%'
}

function scrapePerson(doc) {
    const data = JSON.parse(doc.querySelector('.profile-hero').parentNode.dataset.reactProps)
    return {
        name: data.profile.fullName,
        position: data.profile.jobTitle,
        face: data.profile.imgSrc
    }
}

function formatPerson(person) {
    return '* ' + person.name + ', ' + person.position + ' ![picture](' + person.face + ')'
}

if (document.querySelector('.profile-hero')) {
    area.value = formatPerson(scrapePerson(document))
} else {
    const people = []
    const links = [].slice.call(document.querySelectorAll('.position a:first-child'))
        .map(function(link) { return link.href })
        .filter(function(link) { return !link.endsWith('#') })
    links.forEach(function(link) {
        const w = window.open(link)
        w.onload = function() {
            people.push(scrapePerson(w.document))
            w.close()
        }
    })
    const teamName = document.querySelector('h1').textContent.replace('Group: ', '')
    const poll = setInterval(function() {
        if (people.length == links.length) {
            area.value = '# ' + teamName + '\n\n' + people.map(formatPerson).join('\n')
            clearInterval(poll)
            alert('Done!')
        }
    }, 1000)
}