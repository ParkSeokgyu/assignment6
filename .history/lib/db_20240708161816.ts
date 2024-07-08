import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


// user DB 생성 테스트 코드
async function test() {
  // const user = await db.user.create({
  //   data: {
  //     username: "이름test",
  //   }
  // })
  // console.log(user);

  const tweet = await db.tweet.create({
    data: {
      tweet: "tweettest",
      user: {
        connect: {
          id: 1,
        },
      }
    }
  })
  console.log(tweet);

}
test();



export default db;