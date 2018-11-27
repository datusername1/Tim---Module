const fs = require('fs');
const db = require('../models');
const csv = require('csv');
const sequelize = require('../index.js');
const fakeData = require('./master.js');

const src = fs.createWriteStream('./database/seed/seed.csv');

const fakeDataGenerator = (n) => {
  console.log(`creating ${n*100} rows`);
  console.time('write time');
  src.write(`category,adidas_id,item_name,price,image,rating\n`);
  // let count = 1;
  for ( let x = 0; x < n; x++ ) {
    for (let shoe of fakeData) {
      src.write(`,${shoe[0]},${shoe[1]},${shoe[2]},${shoe[3]},${shoe[4]},${shoe[5]}\n`);
      // src.write(`,Ultraboost v${count},18000,https://s3-us-west-1.amazonaws.com/shoeboost/${Math.ceil(Math.random()*36)}.jpg,${Math.ceil(Math.random()*5)}\n`);
    }
  }
  
  src.end();
  console.timeEnd('write time');

  console.log('loading records');

  console.time('load time');
  sequelize.query(`LOAD DATA LOCAL INFILE './database/seed/seed.csv' INTO TABLE productDetails FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS`)
  .then(() => {
    console.timeEnd('load time');
  });
};

fakeDataGenerator(100000);
