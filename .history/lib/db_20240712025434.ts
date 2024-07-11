import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


// DB 생성 테스트 코드
async function test() {
  const product = await db.product.create({
    data: {
      title: '강아지',
      description: '귀여운 강아지!!!',
      photo: '/dog.jpg',
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(product);
}

test();



export default db;