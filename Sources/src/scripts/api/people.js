import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'l3oee2le',
  dataset: 'production',
});

let people = [];

async function initPeople() {
    const query = `*[_type == "person"]{
            _id,
            name,
            "image": image.asset->url
        }`
    const results = await client.fetch(query);
    people = results;
}

function getRandomPerson() {
    return people[Math.floor(Math.random() * people.length)];
}

export {
    initPeople,
    getRandomPerson
}

