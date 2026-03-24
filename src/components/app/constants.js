import { useMemo } from "react"
import { useI18n } from "@/i18n/context"

const gameCoverImages = [
  "/Rectangle 1161.png",
  "/Rectangle 1163.png",
  "/Rectangle 1165.png",
  "/Rectangle 1167.png",
  "/Rectangle 1169.png",
  "",
]

export function useGameCovers() {
  const { t } = useI18n()
  return useMemo(() =>
    t.gameCovers.map((item, i) => ({
      id: i + 1,
      name: item.name,
      designation: item.designation,
      image: gameCoverImages[i],
    })),
    [t.gameCovers]
  )
}

export const userData = [
  { name: "Jenny", level: "23", value: "¥2203.0", games: "49", hours: "253h", avatar: "/pic/img_v3_02vm_022f6143-d2e6-4f23-966d-77a4ef0471fg 1.png" },
  { name: "Jenny", level: "159", value: "¥2203.0", games: "49", hours: "253h", avatar: "/pic/img_v3_02vm_35ee1ed7-c9b0-4f9e-baf7-56614825ef4g 1.png" },
  { name: "Jilly", level: "131", value: "¥376555.1", games: "3413", hours: "2661h", avatar: "/pic/img_v3_02vm_38105653-0ee0-4ae5-b788-fd69364610fg 1.png" },
  { name: "Jilly", level: "461", value: "¥376555.1", games: "3413", hours: "2661h", avatar: "/pic/img_v3_02vm_4d9c3469-e8a3-4c14-8b70-6f068cc70e1g 1.png" },
  { name: "Jenny", level: "152", value: "¥1916", games: "172", hours: "399h", avatar: "/pic/img_v3_02vm_805b67cb-a886-4586-ba3e-937f20ab3e9g 1.png" },
  { name: "Jenny", level: "50", value: "¥1916", games: "172", hours: "399h", avatar: "/pic/img_v3_02vm_b6cdbcb9-9155-4eaa-9cc8-64d04c9453ag 1.png" },
  { name: "Jone", level: "177", value: "¥13915.1", games: "227", hours: "984h", avatar: "/pic/img_v3_02vm_c352da4f-7f7a-42de-bce7-2d111011a6bg 1.png" },
  { name: "Jone", level: "213", value: "¥13915.1", games: "227", hours: "984h", avatar: "/pic/img_v3_02vm_e114c805-f4b5-4bc6-bbe1-76122bb59b1g 1.png" },
  { name: "Jenny", level: "10", value: "¥18.9", games: "1", hours: "97h", avatar: "/pic/image 2.png" },
  { name: "Jenny", level: "251", value: "¥18.9", games: "1", hours: "97h", avatar: "/pic/image 3.png" },
]

export const firstRowUsers = userData.slice(0, 5)
export const secondRowUsers = userData.slice(5, 10)

export const featurePreviewPhotoRows = [
  [
    { src: "/back/image 193.png", position: "50% 45%" },
    { src: "/image 185.png", position: "50% 50%" },
    { src: "/back/image 196.png", position: "55% 62%" },
    { src: "/image 185.png", position: "45% 38%" },
    { src: "/back/image 199.png", position: "48% 52%" },
  ],
  [
    { src: "/back/image 191.png", position: "52% 60%" },
    { src: "/back/image 200.png", position: "46% 40%" },
    { src: "/image 185.png", position: "50% 52%" },
    { src: "/back/image 193.png", position: "58% 66%" },
    { src: "/back/image 191.png", position: "43% 42%" },
  ],
  [
    { src: "/back/image 196.png", position: "50% 48%" },
    { src: "/image 185.png", position: "48% 56%" },
    { src: "/back/image 199.png", position: "56% 64%" },
    { src: "/image 185.png", position: "52% 44%" },
    { src: "/back/image 200.png", position: "44% 38%" },
  ],
]

export const filingLinks = {
  wenwangwen: "https://www.xiaoji.com/uploads/20250926/ae7d883ea2171c9fae092cb8599ce674.jpg",
  icp: "https://beian.miit.gov.cn/",
  gongan: "https://beian.mps.gov.cn/#/query/webSearch",
  faqCompatList: "https://gamesirworld.feishu.cn/sheets/ARMWs3ZZFhkdkBt6YuVcoqscnYb",
}
