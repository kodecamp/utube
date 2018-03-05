

// Functions = mechanism = how to do a task

// process to grow tomatoes in garden
function growTomatoes() {
  console.log("1. Thoroughly moisten the seed-starting mix");
  console.log("2. fill the containers to within 1/2 of the top");
  console.log("3. Water to ensure good seed-to-mix contact");
  console.log("4. Place the pots in a warm spot or on top of a heat mat");
  console.log("5.Keep the mix moist but not soaking wet");
}

let person = {
  name: 'Rakesh',
  address: 'Lucknow',
  doTask: function(task) {
    console.log('Analyse task....');
    console.log('Gathering of required resources...');
    task();
    console.log('Task complted....');
  }
}

person.doTask(growTomatoes);

let person2 = {
  name: 'Sushil',
  address: 'Lucknow',
  doTask: function(task) {
    console.log('Analyse ...');
    console.log('Resource identify...');
    console.log('planning....');
    task();
    console.log('progress monitor....');
    console.log('task completed...');
  }
}

person2.doTask(growTomatoes);
