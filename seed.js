const {db, Campuses, Students} = require('./server/db')
const {green, red} = require('chalk')

const seed = async () => {
await db.sync({force: true})

 await Campuses.bulkCreate([
  {name: 'Northwestern University',
  imageUrl: 'https://www.usnews.com/img/college-photo_3271_256x256mm.jpg',
  address: '2305 Sheridan Road Evanston, IL',
  description: 'A Big Ten School'},
{name: 'University of Chicago',
imageUrl: 'https://s-i.huffpost.com/gen/2322040/images/n-UNIVERSITY-OF-CHICAGO-628x314.jpg',
address: '1 Hyde Park Way, Chi-town, Stillinoid',
description: 'Not a Big Ten School but a Top 10 in US News'},
{name: 'Loyola University',
  imageUrl: 'http://worldartsme.com/images/university-clipart-1.jpg',
  address: 'near Rogers Park',
  description: 'Private College in the North Shore region'}
]);

await Students.bulkCreate([
  {firstName: 'Rajiv',
  lastName: 'Bhatia',
  email: 'rb@mail.com',
  gpa: 3.5,
  imageUrl: 'https://classroomclipart.com/images/gallery/Clipart/School/student-character-holding-big-pencil-clipart.jpg',
  campusId: 1},
  {firstName: 'Stpehen',
  lastName: 'Colbert',
  email: 'sc@comedycentral.com',
  gpa: 0.6,
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Stephen_Colbert_December_2017.jpg/220px-Stephen_Colbert_December_2017.jpg',
  campusId: 1},
  {firstName: 'Stpehen',
  lastName: 'Colbert II',
  email: 'sc2@comedycentral.com',
  gpa: 0.7,
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Stephen_Colbert_December_2017.jpg/220px-Stephen_Colbert_December_2017.jpg',
  campusId: 1},
  {firstName: 'Steven',
  lastName: 'Levitt',
  email: 'freakonomist@mail.com',
  gpa: 3.1,
  imageUrl: 'https://classroomclipart.com/images/gallery/Clipart/School/student-character-holding-big-pencil-clipart.jpg',
  campusId: 2},
]);

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
