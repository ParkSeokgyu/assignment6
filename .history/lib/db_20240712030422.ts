import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


// // DB 생성 테스트 코드
// async function test() {
//   const product = await db.product.create({
//     data: {
//       title: '돌고래',
//       description: '귀여운 돌고래!!!',
//       photo: '/dolphin.jpg',
//       user: {
//         connect: {
//           id: 2, // 아이디 번호 주의!!!
//         },
//       },
//     },
//   });
//   console.log(product);
// }

// test();



export default db;