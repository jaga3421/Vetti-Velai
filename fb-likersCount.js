// to hold all likers
nameSet = new Set();
document.querySelectorAll('.uiScrollableAreaContent > div > ul a[title]').forEach(name => nameSet.add(name.getAttribute('title')));
updateCount(nameSet);

// find the count, typical
function updateCount(set) {
    set.forEach(name => {
        obj[name] = obj[name] ? obj[name] + 1 : 1

    })
}
