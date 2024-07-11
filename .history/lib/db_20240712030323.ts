import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


// DB 생성 테스트 코드
async function test() {
  const product = await db.product.create({
    data: {
      title: '고양이',
      description: '귀여운 고양이!!!',
      photo: '/cat.jpg',
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });
  console.log(product);
}

test();



export default db;