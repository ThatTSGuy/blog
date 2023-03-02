const input = document.querySelector('.search-input');
const button = document.querySelector('.search-btn');

const query = new URLSearchParams(location.search).get('q');

if (query) filterAndDisplay();

async function filterAndDisplay() {
    input.value = query;

    const res = await fetch('/search.json');
    const posts = await res.json();

    const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

    const parent = document.querySelector('.posts');
    const template = document.querySelector('.post-template');

    filtered.forEach(post => {
        const clone = template.content.cloneNode(true);

        clone.href = post.href;

        clone.querySelector('img').src = '/images/' + post.thumbnail;
        clone.querySelector('div').innerHTML = highlight(post.title, query);

        parent.appendChild(clone);
    })
}

function highlight(text, target) {
    const regex = new RegExp(target, 'gi');

    return text.replace(regex, '<mark>$&</mark>');
}

input.addEventListener('keypress', key => {
    if (key.code == 'Enter') search();
})

button.addEventListener('click', search);

function search() {
    if (input.value) location.href = '/search/?' + new URLSearchParams({ q: input.value }).toString();
    else location.href = '/';
}