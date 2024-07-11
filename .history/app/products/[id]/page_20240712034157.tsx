import db from "@/lib/db"; // 데이터베이스 연결을 가져옴
import getSession from "@/lib/session"; // 세션을 가져오는 함수
import { UserIcon } from "@heroicons/react/24/solid"; // Heroicons 패키지에서 사용자 아이콘을 가져옴
import Image from "next/image"; // Next.js의 Image 컴포넌트를 가져옴
import { notFound } from "next/navigation"; // Next.js의 notFound 함수, 404 페이지를 반환함

// 사용자 ID가 현재 세션의 사용자 ID와 일치하는지 확인하는 함수
async function getIsOwner(userId: number) {
  const session = await getSession(); // 세션을 가져옴
  if (session.id) { // 세션이 존재하면
    return session.id === userId; // 세션 ID가 사용자 ID와 일치하는지 확인
  }
  return false; // 세션이 없으면 false 반환
}

// 주어진 ID에 해당하는 제품을 데이터베이스에서 가져오는 함수
async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id, // 제품 ID를 조건으로 설정
    },
    include: {
      user: { // 제품과 연결된 사용자의 정보를 포함
        select: {
          username: true, // 사용자 이름 포함
          avatar: true, // 사용자 아바타 포함
        },
      },
    },
  });
  return product; // 제품 데이터를 반환
}

// 제품 상세 페이지 컴포넌트
export default async function ProductDetail({
  params,
}: {
  params: { id: string }; // URL 파라미터로부터 제품 ID를 가져옴
}) {
  const id = Number(params.id); // 제품 ID를 숫자로 변환
  if (isNaN(id)) { // ID가 숫자가 아니면
    return notFound(); // 404 페이지를 반환
  }
  const product = await getProduct(id); // 제품 데이터를 가져옴
  if (!product) { // 제품이 존재하지 않으면
    return notFound(); // 404 페이지를 반환
  }
  const isOwner = await getIsOwner(product.userId); // 현재 사용자가 제품 소유자인지 확인
  
  // 제품 상세 페이지를 반환
  return (
    <div>
      {/* 제품 이미지를 표시 */}
      <div className="relative aspect-square">
        <Image
            className="object-cover"
            fill
            src={product.photo}
            alt={product.title}
          />
      </div>

      {/* 제품 소유자의 정보를 표시 */}
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
        <div className="size-10 overflow-hidden rounded-full">
          {product.user.avatar !== null ? (
            <Image
              objectFit="cover" 
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>

      {/* 제품 제목과 설명을 표시 */}
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>

      {/* 하단 고정 바에 가격과 버튼을 표시 */}
      <div className="fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-between items-center">
        {isOwner ? (
          <button className="bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold">
            내 상품 삭제하기
          </button>
        ) : null}
      </div>
    </div>
  );
}
