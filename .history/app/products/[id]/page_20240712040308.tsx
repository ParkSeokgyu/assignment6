import db from "@/lib/db";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

// 사용자 ID가 현재 세션의 사용자 ID와 일치하는지 확인하는 함수
async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

// 주어진 ID에 해당하는 제품을 데이터베이스에서 가져오는 함수
async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return product;
}

// 제품 상세 페이지 컴포넌트
export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  const isOwner = await getIsOwner(product.userId);

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* 제품 이미지를 표시 */}
      <div className="relative aspect-square mb-5">
        <Image
          className="object-cover rounded-lg shadow-lg"
          fill
          src={product.photo}
          alt={product.title}
        />
      </div>

      {/* 제품 소유자의 정보를 표시 */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5 mb-5">
        <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-200">
          {product.user.avatar !== null ? (
            <Image
              className="object-cover"
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
            />
          ) : (
            <UserIcon className="w-10 h-10 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{product.user.username}</h3>
        </div>
      </div>

      {/* 제품 제목과 설명을 표시 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* 내글 삭제하기 버튼을 표시 */}
      {isOwner && (
        <div className="fixed right-5 bottom-5">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-semibold shadow-md transition duration-300">
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
