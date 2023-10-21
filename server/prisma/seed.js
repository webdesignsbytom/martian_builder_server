import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: 'tom@tom.com',
      password: password,
      role: 'MEMBER',
      profile: {
        create: {
          username: `tom test`,
          country: 'uk',
        },
      },
      player: {
        create: {
          id: '111',
          playerName: 'CPT Joe',
        },
      },
    },
  });

  const testAdmin = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password: password,
      role: 'ADMIN',
      player: {
        create: {
          id: '222',
          playerName: 'Admin Guy',
        },
      },
      profile: {
        create: {
          username: `admin guy`,
          country: 'uk',
        },
      },
    },
  });

  const mainDev = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password: password,
      role: 'DEVELOPER',
      player: {
        create: {
          id: 'tomdev',
          playerName: 'DevTom',
        },
      },
      profile: {
        create: {
          username: `Tom`,
          country: 'united kingdom',
        },
      },
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
