const fs = require("fs");
const path = require("path");
const faker = require("faker");
const md5 = require("md5");

function createBadges(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const first_name = faker.name.first_name();
    const last_name = faker.name.last_name();
    const email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      first_name,
      last_name,
      email,
      job_title: faker.name.job_title(),
      twitter: `${first_name}${last_name}${faker.address.zipCode()}`,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`
    });
  }

  return result;
}

function main() {
  const data = {
    badges: createBadges()
  };

  fs.writeFileSync(
    path.resolve(__dirname, "db.json"),
    JSON.stringify(data, null, 4)
  );
}

main();
