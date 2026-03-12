import { useState, useEffect, useRef } from "react"
import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { CometCard } from "@/components/ui/comet-card"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

function usePageZoom() {
  const appRef = useRef(null)
  useEffect(() => {
    const handleResize = () => {
      if (!appRef.current) return
      appRef.current.style.zoom = "1"
      const vw = document.documentElement.clientWidth
      const zoom = Math.min(1, vw / 1440)
      appRef.current.style.zoom = zoom
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return appRef
}

const userData = [
  { name: "Jenny", signature: "个人签名", level: "23", value: "¥2203.0", games: "49", hours: "253h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny" },
  { name: "Jone", signature: "个人签名", level: "10", value: "¥13915.1", games: "227", hours: "984h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jone" },
  { name: "Jilly", signature: "个人签名", level: "10", value: "¥376555.1", games: "3413", hours: "2661h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jilly" },
  { name: "Jack", signature: "个人签名", level: "10", value: "¥1916", games: "172", hours: "399h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" },
  { name: "Jane", signature: "个人签名", level: "10", value: "¥18.9", games: "1", hours: "97h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
  { name: "James", signature: "个人签名", level: "10", value: "¥5420", games: "88", hours: "120h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { name: "Alice", signature: "个人签名", level: "15", value: "¥890.0", games: "32", hours: "150h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { name: "Bob", signature: "个人签名", level: "12", value: "¥2500.5", games: "110", hours: "420h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
  { name: "Charlie", signature: "个人签名", level: "8", value: "¥120.0", games: "5", hours: "20h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
  { name: "David", signature: "个人签名", level: "20", value: "¥15600", games: "450", hours: "1200h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
]

const firstRow = userData.slice(0, 5);
const secondRow = userData.slice(5, 10);

const gameCovers = [
  { id: 1, name: "黑神话：悟空", designation: "动作RPG", image: "/Rectangle 1161.png" },
  { id: 2, name: "艾尔登法环", designation: "开放世界RPG", image: "/Rectangle 1163.png" },
  { id: 3, name: "博德之门3", designation: "角色扮演", image: "/Rectangle 1165.png" },
  { id: 4, name: "赛博朋克2077", designation: "动作冒险", image: "/Rectangle 1167.png" },
  { id: 5, name: "只狼", designation: "动作冒险", image: "/Rectangle 1169.png" },
  { id: 6, name: "战神：诸神黄昏", designation: "动作冒险", image: "/Rectangle 1171.png" },
];

const UserPopupCard = ({ user }) => (
  <div className="user-popup">
    <div className="user-popup-top">
      <div className="user-info">
        <div className="user-avatar">
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className="user-details">
          <span className="user-name">{user.name}</span>
          <span className="user-signature">{user.signature}</span>
        </div>
      </div>
      <div className="user-level-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="24" stroke="#BF654A" strokeWidth="2" />
        </svg>
        <span>{user.level}</span>
      </div>
    </div>
    <div className="user-stats-bar">
      <div className="user-stat-item">
        <span className="user-stat-value">{user.value}</span>
        <span className="user-stat-label">
          账号价值
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33331 10.6666V7.99992C7.33331 7.63173 7.63179 7.33325 7.99998 7.33325C8.36817 7.33325 8.66665 7.63173 8.66665 7.99992V10.6666C8.66665 11.0348 8.36817 11.3333 7.99998 11.3333C7.63179 11.3333 7.33331 11.0348 7.33331 10.6666Z" fill="#BAD7F5" fillOpacity="0.65" />
            <path d="M7.99998 4.33325C8.55227 4.33325 8.99998 4.78097 8.99998 5.33325C8.99996 5.88552 8.55225 6.33325 7.99998 6.33325C7.44771 6.33325 7 5.88552 6.99998 5.33325C6.99998 4.78097 7.44769 4.33325 7.99998 4.33325Z" fill="#BAD7F5" fillOpacity="0.65" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325ZM7.99998 2.66659C5.05446 2.66659 2.66665 5.0544 2.66665 7.99992C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 7.99992C13.3333 5.0544 10.9455 2.66659 7.99998 2.66659Z" fill="#BAD7F5" fillOpacity="0.65" />
          </svg>
        </span>
      </div>
      <div className="user-stat-item">
        <span className="user-stat-value">{user.games}</span>
        <span className="user-stat-label">游戏数量</span>
      </div>
      <div className="user-stat-item">
        <span className="user-stat-value">{user.hours}</span>
        <span className="user-stat-label">游戏时长</span>
      </div>
    </div>
  </div>
)

function BrandIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1028 2.8266C18.904 -1.15454 26.1938 0.800874 28.3635 6.65195L29.0946 8.62316C29.1522 8.77852 29.2594 8.91055 29.3994 8.99898L31.1429 10.1004C36.4299 13.4404 36.8243 21.013 31.9129 24.8854L30.3113 26.1479C30.181 26.2506 30.0883 26.3936 30.0473 26.5546L29.5381 28.5553C27.9974 34.61 20.9432 37.3245 15.7487 33.8615L14.0007 32.6964C13.8632 32.6048 13.6995 32.5607 13.5347 32.5712L11.439 32.7055C5.21096 33.1042 0.457622 27.2221 2.14715 21.2073L2.70548 19.22C2.7504 19.06 2.74108 18.8895 2.6795 18.7352L1.92347 16.8402C-0.396038 11.0281 3.72726 4.66751 9.97399 4.42164L12.0342 4.34078C12.1995 4.33424 12.358 4.2734 12.4854 4.16781L14.1028 2.8266ZM26.4592 8.5982C24.6823 3.80629 18.7122 2.20463 14.7802 5.46508L13.4557 6.56336C13.3513 6.64993 13.2214 6.69971 13.0859 6.70504L11.399 6.77148C6.2831 6.97281 2.9062 12.1819 4.80572 16.9418L5.42516 18.494C5.47557 18.6204 5.48267 18.7599 5.44588 18.8909L4.98867 20.5186C3.60509 25.4444 7.49804 30.2617 12.5985 29.9352L14.3149 29.8252C14.4499 29.8166 14.584 29.8525 14.6966 29.9275L16.1279 30.882C20.3821 33.718 26.1592 31.4949 27.421 26.5363L27.8382 24.8977C27.8717 24.7659 27.9477 24.6486 28.0545 24.5644L29.366 23.5305C33.3882 20.3591 33.0652 14.1576 28.7354 11.4223L27.3076 10.5202C27.1929 10.4478 27.1051 10.3398 27.0579 10.2126L26.4592 8.5982Z"
        fill="white"
      />
      <ellipse cx="20.3678" cy="18.2518" rx="2.01164" ry="2.01399" fill="white" />
      <ellipse cx="26.4028" cy="18.2518" rx="2.01164" ry="2.01399" fill="white" />
      <path
        d="M12.3631 15.2309C12.3631 14.9528 12.138 14.7274 11.8602 14.7274H10.5191C10.2414 14.7274 10.0162 14.9528 10.0162 15.2309V16.5735C10.0162 16.8515 9.79105 17.077 9.5133 17.077L8.17228 17.077C7.89453 17.077 7.66937 17.3024 7.66937 17.5805V18.9231C7.66937 19.2012 7.89453 19.4266 8.17228 19.4266H9.5133C9.79105 19.4266 10.0162 19.652 10.0162 19.9301V21.2728C10.0162 21.5509 10.2414 21.7763 10.5191 21.7763H11.8602C12.138 21.7763 12.3631 21.5509 12.3631 21.2728V19.9301C12.3631 19.652 12.5883 19.4266 12.866 19.4266H14.2072C14.4849 19.4266 14.7101 19.2012 14.7101 18.9231V17.5805C14.7101 17.3024 14.4849 17.077 14.2072 17.077H12.866C12.5883 17.077 12.3631 16.8515 12.3631 16.5735V15.2309Z"
        fill="white"
      />
    </svg>
  )
}

function BrandTextIcon() {
  return (
    <svg width="91" height="21" viewBox="0 0 91 21" fill="none" aria-hidden="true">
      <path d="M88.9897 3.16285L87.4225 4.40617C86.818 3.55548 85.497 2.24671 84.4894 1.33058L85.9448 0.261758C86.9747 1.11245 88.3404 2.33396 88.9897 3.16285ZM78.7578 15.5307L77.1009 16.9703C76.6308 16.0323 75.8919 14.8763 75.0859 13.6329C73.9216 15.6833 72.5335 17.3411 70.9214 18.5844C70.5856 18.0609 69.9139 17.2975 69.399 16.9267C71.0782 15.7706 72.5783 13.9601 73.7425 11.6916C72.5335 9.9466 71.2125 8.13615 70.0259 6.63107L71.4812 5.45318C72.4887 6.74013 73.6082 8.15796 74.7053 9.61941C75.3322 8.00527 75.8471 6.19481 76.183 4.31892H69.9587V2.53028H76.7427L77.0785 2.44303L78.4219 2.87928C77.9965 6.173 77.1905 9.0959 76.1158 11.5607C77.1905 13.044 78.1308 14.4618 78.7578 15.5307ZM87.3777 7.87439L89.0569 8.83415C88.1613 11.059 86.7508 13.2839 85.094 15.1816C85.7209 16.6431 86.4821 17.5156 87.4225 17.6465C87.9598 17.7119 88.2733 16.5558 88.43 14.2437C88.8554 14.68 89.7734 15.2253 90.1988 15.4216C89.6614 19.217 88.6539 20.2422 87.512 20.1549C85.7209 19.9804 84.3999 18.8462 83.4371 16.9049C82.2953 17.9519 81.0639 18.8462 79.8101 19.5224C79.407 18.9989 78.7578 18.3663 78.1756 17.9955C79.7653 17.2539 81.2878 16.185 82.6311 14.8763C82.0042 12.9568 81.6012 10.5574 81.3101 7.78714L78.601 8.09252L78.3323 6.23844L81.131 5.91125C80.9967 4.14442 80.8847 2.24671 80.8176 0.239944H82.9894C83.0341 2.13765 83.1237 3.96992 83.258 5.69312L89.6614 4.95149L89.9301 6.80557L83.4371 7.5472C83.661 9.61941 83.9745 11.4517 84.3551 13.0004C85.6313 11.4081 86.6836 9.64122 87.3777 7.87439Z" fill="white" />
      <path d="M51.4062 2.46484L50.1524 4.07898C49.4359 3.44641 47.8463 2.44302 46.7044 1.78864L47.9134 0.370816C49.0553 0.937946 50.6226 1.87589 51.4062 2.46484ZM50.6897 8.0707L49.4807 9.70665C48.6971 9.11771 47.0626 8.20158 45.876 7.59082L47.0626 6.10756C48.2269 6.65287 49.8613 7.48176 50.6897 8.0707ZM48.9434 11.8443L50.645 12.8695C49.9285 15.1598 48.9658 17.7774 48.0926 19.8277L46.2118 18.8244C47.0179 17.123 48.1373 14.3309 48.9434 11.8443ZM66.5191 11.9315V13.7638H63.6532V17.9737C63.6532 18.9334 63.4741 19.4787 62.78 19.7841C62.086 20.0895 61.0561 20.1113 59.5784 20.1113C59.5112 19.566 59.2201 18.7807 58.9962 18.2572C60.0485 18.3009 61.0337 18.3009 61.3247 18.279C61.6382 18.279 61.7054 18.1918 61.7054 17.9519V13.7638H58.5708V11.9315H61.7054V9.94659C62.1979 9.57578 62.78 9.0959 63.2502 8.57239H59.5784V7.45994L59.4216 7.69988C59.041 7.41632 58.1454 6.93644 57.6529 6.6965C57.9439 6.30387 58.235 5.86762 58.5037 5.36592H54.6303C54.6079 6.30387 54.5855 7.24182 54.5407 8.15795H58.2126C58.2126 8.15795 58.2126 8.74689 58.1902 8.98683C57.9663 15.8796 57.7872 18.3445 57.2051 19.1079C56.8244 19.6096 56.4438 19.7841 55.8617 19.8714C55.3691 19.9368 54.4959 19.9368 53.6228 19.915C53.578 19.3697 53.3989 18.6062 53.1302 18.0827C53.8914 18.1482 54.5855 18.17 54.899 18.17C55.2124 18.17 55.3915 18.1264 55.5483 17.8428C55.9065 17.4065 56.108 15.4216 56.2871 9.99022H54.4064C54.0705 13.9819 53.2198 17.6465 50.9808 20.0895C50.6674 19.6532 50.0404 19.0861 49.5479 18.7807C52.3689 15.8142 52.6152 10.5137 52.7272 5.36592H50.8465V3.44641H54.4064C54.0705 2.68296 53.3541 1.5487 52.772 0.763445L54.6527 0C55.3467 0.850695 56.108 1.96314 56.4886 2.7484L54.8318 3.44641H58.6604V5.03873C59.3321 3.62091 59.8246 1.87589 60.1381 0.15269L62.1084 0.458067C61.9516 1.26514 61.7725 2.09402 61.5486 2.85746H66.4967V4.77698H60.9217C60.6307 5.4968 60.3396 6.19481 59.9814 6.80556H64.8623L65.2429 6.6965L66.4743 7.56901C65.7131 8.5942 64.6832 9.68484 63.6532 10.5137V11.9315H66.5191Z" fill="white" />
      <path d="M37.8606 7.37272H34.1215V12.1933H37.8606V7.37272ZM40.0323 14.0692H32.0393V7.37272H28.457V16.8612H42.5847V18.8244H26.2852V7.37272H23.1507V5.43139H26.2852V0.698035H28.457V5.43139H32.0393V0.239967H34.1215V5.43139H37.8606V0.479908H40.0323V5.43139H43.1893V7.37272H40.0323V14.0692Z" fill="white" />
      <path d="M19.7251 9.33587V10.95H0.514958V9.33587H9.00056V7.6563H2.57479V6.08578H9.00056V4.51527H1.43293V2.92294H5.68692C5.37347 2.22493 4.8809 1.33061 4.36594 0.676231L6.22427 0.0872883C6.85117 0.850732 7.50047 1.89774 7.79153 2.59575L6.94073 2.92294H12.4709C12.9635 2.05043 13.568 0.91617 13.8815 0.0654755L15.9637 0.588981C15.5159 1.39605 15.0457 2.22493 14.5755 2.92294H18.6952V4.51527H11.1276V6.08578H17.6877V7.6563H11.1276V9.33587H19.7251ZM4.29878 14.0474V17.7556H6.87356V14.0474H4.29878ZM11.3962 14.0474H8.77667V17.7556H11.3962V14.0474ZM15.9189 14.0474H13.2993V17.7556H15.9189V14.0474ZM17.9563 17.7556H20.2177V19.5224H0V17.7556H2.37328V12.3678H17.9563V17.7556Z" fill="white" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
      <path
        d="M12.2064 11.0573C12.1839 11.1177 11.8915 12.151 11.1717 13.2069C10.5419 14.1271 9.89706 15.0473 8.87737 15.0624C7.87267 15.0775 7.55026 14.459 6.40311 14.459C5.25595 14.459 4.89606 15.0473 3.94385 15.0775C2.96164 15.1152 2.20437 14.0743 1.57455 13.1617C0.292438 11.3062 -0.697266 7.87437 0.629837 5.58145C1.28214 4.43499 2.45929 3.70337 3.73391 3.68074C4.69362 3.66566 5.61584 4.33694 6.20067 4.33694C6.80049 4.33694 7.91016 3.52235 9.07981 3.64303C9.56716 3.66566 10.9393 3.84668 11.8165 5.13645C11.749 5.1817 10.182 6.11697 10.197 8.01014C10.212 10.2955 12.1839 11.0498 12.2064 11.0573ZM8.30754 2.42114C8.83238 1.77249 9.18478 0.882473 9.08731 0C8.33753 0.03017 7.41531 0.505348 6.87547 1.14646C6.39561 1.70461 5.96824 2.60971 6.0882 3.48464C6.92045 3.52989 7.7827 3.03963 8.30754 2.42114Z"
        fill="#09090B"
      />
    </svg>
  )
}

function DownloadModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-brand">
            <BrandIcon />
            <BrandTextIcon />
          </div>
          <p className="modal-tagline">Mac 也可以是游戏机</p>
        </div>

        <div className="modal-version-badge">
          <span className="modal-version-dot" />
          内测版本 Beta 0.1.0
        </div>

        <div className="modal-main-action">
          <a
            href="#"
            className="modal-download-btn"
            onClick={(e) => e.preventDefault()}
          >
            <AppleIcon />
            <span>立即下载 for macOS</span>
          </a>
          <p className="modal-system-req">仅支持 Mac M 系列芯片 · macOS 13+</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <span className="modal-info-label">版本号</span>
            <span className="modal-info-value">Beta 0.1.0</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">文件大小</span>
            <span className="modal-info-value">约 128 MB</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">更新日期</span>
            <span className="modal-info-value">2026 年 3 月</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">系统要求</span>
            <span className="modal-info-value">macOS 13 Ventura+</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-community">
          <p className="modal-community-title">加入内测社群</p>
          <p className="modal-community-desc">
            与数千位内测用户一起，第一时间体验新功能，参与反馈共建
          </p>
          <button className="modal-community-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.5 2.5L2.5 8L6.5 9.5L8 13.5L13.5 2.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            加入社群
          </button>
        </div>

        <div className="modal-features">
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8C2 4.686 4.686 2 8 2s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                <path d="M5.5 8l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">海量游戏库</p>
              <p className="modal-feature-desc">支持数百款 Mac 适配游戏，持续扩充</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.2" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">Apple Silicon 原生优化</p>
              <p className="modal-feature-desc">M 系列芯片深度适配，低延迟高帧率</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 5h10M3 8h10M3 11h6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">游戏手柄支持</p>
              <p className="modal-feature-desc">兼容主流手柄设备，即插即用</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [showDownload, setShowDownload] = useState(false)
  const appRef = usePageZoom()

  return (
    <main className="app" ref={appRef}>
      {showDownload && <DownloadModal onClose={() => setShowDownload(false)} />}

      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <BrandIcon />
            <BrandTextIcon />
          </div>
          <nav className="header-nav">
            <div className="header-nav-item">版本介绍</div>
            <div className="header-nav-item">反馈体验</div>
            <div className="header-nav-item">功能前瞻</div>
          </nav>
          <div className="header-action">
            <RainbowButton
              className="header-rainbow-button"
              variant="outline"
              onClick={() => setShowDownload(true)}
            >
              立即下载
            </RainbowButton>
          </div>
        </div>
      </header>
      <section className="hero">
        <h1 className="hero-title">盖世游戏</h1>
        <div className="hero-headline" aria-label="Mac 也可以是游戏机">
          <span className="hero-headline-en">Mac</span>
          <span className="hero-headline-zh">也可以是游戏机</span>
        </div>
        <p className="hero-subtitle">客户端内测版本抢先体验开启</p>
        <div className="hero-actions">
          <button
            type="button"
            className="download-button-primary"
            onClick={() => setShowDownload(true)}
          >
            <AppleIcon />
            <span className="download-button-label">立即下载</span>
          </button>
          <button type="button" className="download-button-secondary">
            <span className="download-button-secondary-label">加入内测社群</span>
          </button>
        </div>
        <p className="hero-caption">本次内测仅支持 Mac M 系列芯片</p>
        <div className="hero-showcase">
          <ShowcaseSparkles />
        </div>
        <div className="showcase-content">
          <h2 className="showcase-title">畅玩 Windows 游戏</h2>
          <p className="showcase-subtitle">
            突破硬件设备局限性，在Mac 也能体验 Windows 3A 大作
          </p>
          <div className="showcase-grid">
            <CometCard className="showcase-box showcase-box-small">
              <div className="showcase-box-icon">
                <svg width="396" height="405" viewBox="0 0 396 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint0_linear_12_863)" strokeWidth="12.7709" />
                  <path opacity="0.4" d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint1_linear_12_863)" strokeOpacity="0.2" strokeWidth="1.41899" />
                  <path d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint2_radial_12_863)" strokeWidth="0.709494" />
                  <defs>
                    <linearGradient id="paint0_linear_12_863" x1="173.635" y1="57.5454" x2="173.635" y2="304.395" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B2FCFF" />
                      <stop offset="1" stopColor="#B2FCFF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_863" x1="173.635" y1="57.5454" x2="173.635" y2="304.395" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B2FCFF" />
                      <stop offset="1" stopColor="#B2FCFF" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint2_radial_12_863" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173.635 89.2478) rotate(90) scale(245.147 202.657)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="showcase-box-text">Mac 畅游3A游戏</div>
              </div>
            </CometCard>
            <CometCard className="showcase-box showcase-box-large">
              <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-12 text-[#86868B] text-xl font-light tracking-widest">打破壁垒 畅玩无界</div>
                <div className="relative z-10 text-6xl font-bold text-white/10 select-none pointer-events-none">
                  GAMEHUB
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
                </div>
              </div>
            </CometCard>
          </div>
        </div>
        <div className="steam-management">
          <h2 className="steam-management-title">Steam 多账号管理</h2>
          <p className="steam-management-subtitle">
            Steam 账号互通，自动同步账号数据和云存档，续玩不脱节
          </p>
        </div>
        <div className="user-popup-container">
          <Marquee style={{ "--duration": "60s", "--gap": "24px" }}>
            {firstRow.map((user, j) => (
              <UserPopupCard key={`r1-${j}`} user={user} />
            ))}
          </Marquee>
          <Marquee reverse style={{ "--duration": "60s", "--gap": "24px" }}>
            {secondRow.map((user, j) => (
              <UserPopupCard key={`r2-${j}`} user={user} />
            ))}
          </Marquee>
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
        </div>
        <div className="steam-data-text">
          我们同步的 Steam 数据
        </div>
        <div className="steam-data-section">
          <img className="steam-data-bg" src="/Background.png" alt="" />
          <img className="steam-data-center-img" src="/image 213.png" alt="" />
          <div className="steam-data-grid">
            <div className="steam-data-card">
              <div className="game-covers-stack">
                <AnimatedTooltip items={gameCovers} />
              </div>
              <span className="steam-data-card-label">游戏数量</span>
            </div>
          </div>
          <div className="steam-data-grid-right">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">¥1967.7</span>
                </div>
              </div>
              <span className="steam-data-card-label">账号价值</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">1967.7h</span>
                </div>
              </div>
              <span className="steam-data-card-label">游戏时长</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-right">
            <div className="steam-data-card steam-data-card-cloud">
              <img className="steam-cloud-icon" src="/Group 2 (6).svg" alt="" />
              <span className="steam-data-card-label">游戏云存档</span>
            </div>
          </div>
        </div>
      </section>

      <section className="compat-section">
        <h2 className="compat-title">个性化兼容性方案</h2>
        <p className="compat-desc">配置游戏专属模拟器兼容性方案，为玩家提供更极致的游戏体验</p>
        <div className="compat-cards">
          <div className="compat-card">
            <h3 className="compat-card-title">通用配置</h3>
            <p className="compat-card-desc">基于游戏特性与设备环境自主调优，拥有更高自由度、更可控的游戏体验。根据游戏特性与个人习惯进行深度自定义，拥有专属你的游玩体验</p>
            <div className="compat-inner-box">
              <div className="compat-inner-box-content">
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18V0L8.2868 9.8849V2.46044L22 18H18.6769L10.979 9.62591V18L2.81835 7.68346V18H0Z" fill="#AEE352"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">MetalHUD</span>
                  <span className="compat-setting-desc">开启后在游戏中显示 Metal性能监控面板</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_21_937)">
                      <path d="M8.67589 12.884C8.79668 12.884 8.91629 12.8602 9.02789 12.814C9.13948 12.7678 9.24088 12.7001 9.32629 12.6146C9.4117 12.5292 9.47945 12.4278 9.52567 12.3162C9.57188 12.2046 9.59566 12.085 9.59565 11.9642V4.24388C9.59565 2.9183 10.6735 1.83952 12 1.83952C13.3266 1.83952 14.4044 2.9183 14.4044 4.24388V5.35406C14.4044 5.86145 14.8155 6.27382 15.3241 6.27382C15.8327 6.27382 16.2439 5.86145 16.2439 5.35406V4.24376C16.2439 1.90352 14.3394 0 12 0C9.66062 0 7.75613 1.90339 7.75613 4.24388V11.9642C7.75612 12.085 7.7799 12.2046 7.82611 12.3162C7.87233 12.4278 7.94008 12.5292 8.02549 12.6146C8.1109 12.7001 8.2123 12.7678 8.3239 12.814C8.43549 12.8602 8.5551 12.884 8.67589 12.884ZM15.3241 11.0813C15.2033 11.0813 15.0837 11.1051 14.9721 11.1513C14.8605 11.1975 14.7591 11.2653 14.6737 11.3507C14.5883 11.4361 14.5206 11.5375 14.4744 11.6491C14.4281 11.7607 14.4044 11.8803 14.4044 12.0011V19.7562C14.4044 21.0817 13.3266 22.1605 12 22.1605C10.6735 22.1605 9.59565 21.0817 9.59565 19.7561V18.6308C9.59565 18.1234 9.1845 17.7111 8.67589 17.7111C8.16728 17.7111 7.75613 18.1233 7.75613 18.6308V19.7561C7.75613 22.0967 9.66062 24 12 24C14.3394 24 16.2439 22.0966 16.2439 19.7561V12.001C16.2439 11.8802 16.2201 11.7606 16.1739 11.649C16.1277 11.5374 16.0599 11.436 15.9745 11.3506C15.8891 11.2652 15.7877 11.1975 15.6761 11.1513C15.5645 11.1051 15.4449 11.0813 15.3241 11.0813Z" fill="#FF614C"/>
                      <path d="M12.9198 15.3241C12.9198 15.2033 12.896 15.0837 12.8498 14.9721C12.8036 14.8605 12.7358 14.7591 12.6504 14.6737C12.565 14.5883 12.4636 14.5206 12.352 14.4744C12.2404 14.4281 12.1208 14.4044 12 14.4044H4.23515C2.91515 14.4044 1.83952 13.3256 1.83952 12C1.83952 10.6744 2.91503 9.59565 4.23515 9.59565H5.34545C5.85394 9.59565 6.26509 9.18353 6.26509 8.67589C6.26509 8.16825 5.85394 7.75613 5.34533 7.75613H4.23515C1.90012 7.75613 0 9.65953 0 12C0 14.3405 1.90012 16.2439 4.23515 16.2439H12C12.1208 16.2439 12.2404 16.2201 12.352 16.1739C12.4636 16.1277 12.565 16.0599 12.6504 15.9745C12.7358 15.8891 12.8036 15.7877 12.8498 15.6761C12.896 15.5645 12.9198 15.4449 12.9198 15.3241ZM19.7497 7.75613H12C11.4914 7.75613 11.0802 8.1685 11.0802 8.67589C11.0802 9.18328 11.4914 9.59565 12 9.59565H19.7497C21.0784 9.59565 22.1606 10.6744 22.1606 12C22.1606 13.3256 21.0784 14.4044 19.7497 14.4044H18.685C18.1764 14.4044 17.7652 14.8165 17.7652 15.3241C17.7652 15.8318 18.1764 16.2439 18.685 16.2439H19.7497C22.0933 16.2439 24 14.3405 24 12C24 9.65953 22.0933 7.75613 19.7497 7.75613Z" fill="#FF614C"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_21_937">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">AVX加速</span>
                  <span className="compat-setting-desc">让Intel应用在M芯Mac上识别并启用AVX指令</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path d="M3.06328 0.123288C3.65593 -0.164694 4.37698 0.0690572 4.67344 0.645083C4.9698 1.22133 4.72938 1.92228 4.13672 2.21047L2.4 3.05468V17.9452L4.13672 18.7894C4.72939 19.0775 4.96959 19.7786 4.67344 20.3548C4.37705 20.9311 3.65606 21.1647 3.06328 20.8766L1.32656 20.0324C0.513605 19.6371 0 18.8289 0 17.9452V3.05468C0.000143472 2.17107 0.51363 1.36269 1.32656 0.967502L3.06328 0.123288Z" fill="#FF614C"/>
                    <path d="M19.3266 0.645083C19.623 0.0690572 20.3441 -0.164694 20.9367 0.123288L22.6734 0.967502C23.4864 1.36269 23.9999 2.17107 24 3.05468V17.9452C24 18.8289 23.4864 19.6371 22.6734 20.0324L20.9367 20.8766C20.3439 21.1647 19.623 20.9311 19.3266 20.3548C19.0304 19.7786 19.2706 19.0775 19.8633 18.7894L21.6 17.9452V3.05468L19.8633 2.21047C19.2706 1.92228 19.0302 1.22133 19.3266 0.645083Z" fill="#FF614C"/>
                    <path d="M7.2 16.3331C7.86262 16.3331 8.3998 16.8556 8.4 17.4997C8.4 18.144 7.86274 18.6664 7.2 18.6664C6.53726 18.6664 6 18.144 6 17.4997C6.0002 16.8556 6.53738 16.3331 7.2 16.3331Z" fill="#FF614C"/>
                    <path d="M12 16.3331C12.6626 16.3331 13.1998 16.8556 13.2 17.4997C13.2 18.144 12.6627 18.6664 12 18.6664C11.3373 18.6664 10.8 18.144 10.8 17.4997C10.8002 16.8556 11.3374 16.3331 12 16.3331Z" fill="#FF614C"/>
                    <path d="M16.8 16.3331C17.4626 16.3331 17.9998 16.8556 18 17.4997C18 18.144 17.4627 18.6664 16.8 18.6664C16.1373 18.6664 15.6 18.144 15.6 17.4997C15.6002 16.8556 16.1374 16.3331 16.8 16.3331Z" fill="#FF614C"/>
                    <path d="M8.73047 3.50014C8.90185 3.50014 9.06544 3.57157 9.1793 3.6961L12 6.78016L14.8207 3.6961C14.9346 3.57157 15.0981 3.50014 15.2695 3.50014H17.2641C17.7814 3.50026 18.056 4.09464 17.7129 4.47082L13.8 8.74999L17.7129 13.0292C18.0566 13.4053 17.7816 13.9997 17.2641 13.9998H15.2695C15.0981 13.9998 14.9346 13.9284 14.8207 13.8039L12 10.7187L9.1793 13.8039C9.06544 13.9284 8.90185 13.9998 8.73047 13.9998H6.73594C6.21843 13.9997 5.94345 13.4053 6.28711 13.0292L10.1988 8.74999L6.28711 4.47082C5.94397 4.09464 6.21858 3.50026 6.73594 3.50014H8.73047Z" fill="#FF614C"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">环境变量</span>
                  <span className="compat-setting-desc">配置容器环境变量，适配特定程序需求</span>
                </div>
              </div>
              <div className="compat-setting-item compat-setting-item-last">
                <div className="compat-setting-row">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.17189 2.41402C10.7339 0.852226 13.2661 0.852229 14.8281 2.41402L21.586 9.17183C23.1478 10.7339 23.1477 13.266 21.586 14.8281L14.8281 21.5859C13.2661 23.1477 10.7339 23.1477 9.17189 21.5859L2.41408 14.8281C0.852287 13.266 0.85229 10.7339 2.41408 9.17183L9.17189 2.41402ZM13.4141 3.82808C12.6331 3.04734 11.3669 3.04734 10.586 3.82808L3.82814 10.5859C3.0474 11.3669 3.0474 12.633 3.82814 13.414L10.586 20.1718C11.367 20.9526 12.6331 20.9526 13.4141 20.1718L20.1719 13.414C20.9526 12.633 20.9526 11.3669 20.1719 10.5859L13.4141 3.82808Z" fill="#AEE352"/>
                      <path d="M10.586 6.49977C11.367 5.71882 12.6331 5.71883 13.4141 6.49977L17.5001 10.5857C18.281 11.3667 18.281 12.6328 17.5001 13.4138L13.4141 17.4998C12.6331 18.2807 11.3671 18.2807 10.586 17.4998L6.50008 13.4138C5.71913 12.6328 5.71913 11.3667 6.50008 10.5857L10.586 6.49977ZM7.91414 11.9998L12.0001 16.0857L16.086 11.9998L12.0001 7.91384L7.91414 11.9998Z" fill="#AEE352"/>
                      <rect x="11" width="2" height="24" rx="1" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">启动参数</span>
                    <span className="compat-setting-desc">添加程序启动参数，用于启用特定功能或解决兼容性问题</span>
                  </div>
                </div>
                <div className="compat-setting-input">
                  <span className="compat-setting-input-text">请输入参数</span>
                </div>
              </div>
              </div>
            </div>
            <div className="compat-inner-box-2">
              <div className="compat-inner-box-2-content">
              <div className="compat-setting-item compat-setting-item-img">
                <img className="compat-game-cover" src="/Rectangle 111.png" alt="" />
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M13.002 12C13.5542 12 14.002 12.4477 14.002 13V13.002C14.002 13.5542 13.5542 14.002 13.002 14.002H13C12.4477 14.002 12 13.5542 12 13.002V13C12 12.4477 12.4477 12 13 12H13.002Z" fill="#1DC19C"/>
                    <path d="M17.002 12C17.5542 12 18.002 12.4477 18.002 13V13.002C18.002 13.5542 17.5542 14.002 17.002 14.002H17C16.4477 14.002 16 13.5542 16 13.002V13C16 12.4477 16.4477 12 17 12H17.002Z" fill="#1DC19C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7607 0C16.3188 0.000340941 16.8656 0.156186 17.3398 0.450195C17.8131 0.743711 18.195 1.16368 18.4434 1.66211L21.8945 8.55273C21.8973 8.55834 21.8987 8.56466 21.9014 8.57031C21.9132 8.59499 21.9248 8.61976 21.9346 8.64551C21.9381 8.65485 21.9411 8.66439 21.9443 8.67383C21.9515 8.6947 21.958 8.71583 21.9639 8.7373C21.9685 8.75416 21.9729 8.77102 21.9766 8.78809C21.9913 8.85645 22 8.92722 22 9V15C22 15.7957 21.6837 16.5585 21.1211 17.1211C20.5585 17.6837 19.7957 18 19 18H3C2.20435 18 1.44152 17.6837 0.878906 17.1211C0.316296 16.5585 0 15.7956 0 15V9C0 8.92729 0.00772434 8.85639 0.0224609 8.78809C0.0261576 8.77103 0.0305721 8.75414 0.0351562 8.7373C0.0409849 8.71585 0.0474915 8.69469 0.0546875 8.67383C0.0579422 8.6644 0.0609144 8.65485 0.0644531 8.64551C0.0764964 8.61374 0.0903768 8.58286 0.105469 8.55273L3.55566 1.66211C3.80407 1.16352 4.18671 0.743784 4.66016 0.450195C5.13444 0.156133 5.68218 0.000295962 6.24023 0H15.7607ZM2 15C2 15.2652 2.10544 15.5195 2.29297 15.707C2.48051 15.8945 2.73478 16 3 16H19C19.2652 16 19.5195 15.8945 19.707 15.707C19.8945 15.5195 20 15.2652 20 15V10H2V15ZM6.24023 2C6.05419 2.0001 5.87198 2.05234 5.71387 2.15039C5.55597 2.24837 5.42845 2.3883 5.3457 2.55469L4.38965 2.08008L5.34375 2.55762L2.61914 8H19.3809L16.6562 2.55762L16.6543 2.55469L17.5498 2.11035L17.6094 2.08008L16.6543 2.55469C16.5715 2.38832 16.4441 2.24836 16.2861 2.15039C16.1281 2.05239 15.9457 2.00015 15.7598 2H6.24023Z" fill="#1DC19C"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">游戏路径</span>
                  <span className="compat-setting-desc">设置您游戏的安装路径</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.1053 9V5C21.1053 3.96435 20.3595 3.113 19.4039 3.01074L19.2105 3H14.9474C14.4242 3 14 2.55228 14 2C14 1.44772 14.4242 1 14.9474 1H19.2105L19.4057 1.00488C21.4079 1.11211 23 2.85996 23 5V9C23 9.55229 22.5758 10 22.0526 10C21.5294 10 21.1053 9.55229 21.1053 9Z" fill="#1796E2"/>
                    <path d="M2.89474 15V19C2.89474 20.0357 3.64053 20.887 4.59611 20.9893L4.78947 21H9.05263C9.57585 21 10 21.4477 10 22C10 22.5523 9.57585 23 9.05263 23H4.78947L4.59426 22.9951C2.59211 22.8879 1 21.14 1 19V15C1 14.4477 1.42415 14 1.94737 14C2.47059 14 2.89474 14.4477 2.89474 15Z" fill="#1796E2"/>
                    <path d="M0 12L4.41539 0H6.58462L11 12H8.75385L5.55385 2.90196H5.46154L2.24615 12H0ZM8 6.69804L8.52308 8.73726H2.56923L3.06154 6.69804H8Z" fill="#1796E2"/>
                    <path d="M24 14.0779V20.3247H22.1576V15.8312H14.8424V20.3247H13V14.0779H24ZM23.0653 18.5974V20.3247H13.9483V18.5974H23.0653ZM19.4754 12V24H17.4975V12H19.4754Z" fill="#1796E2"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">语言</span>
                  <span className="compat-setting-desc">设置Windows系统语言</span>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="compat-card">
            <h3 className="compat-card-title">兼容性方案</h3>
            <p className="compat-card-desc">为不同游戏提供更灵活的兼容性方案，从默认可玩，到按你习惯去玩.
            兼顾游戏运行稳定性与性能表现，深度搭配更灵活的配置组合方案</p>
            <div className="compat-inner-box-right">
              <div className="compat-inner-box-right-content">
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.307 0.287171C11.7225 -0.00783302 12.2775 -0.00783302 12.693 0.287171L23.4914 7.9625C23.8105 8.1895 24 8.55916 24 8.95267C23.9999 9.34601 23.8104 9.71471 23.4914 9.94166L20.5031 12.064L20.798 12.2769L23.4914 14.191C23.8105 14.418 24 14.7877 24 15.1812C23.9999 15.5745 23.8104 15.9432 23.4914 16.1702L12.693 23.8443C12.2773 24.1398 11.7227 24.1398 11.307 23.8443L0.508614 16.1702C0.189649 15.9432 0.000116372 15.5745 0 15.1812C8.87163e-08 14.7877 0.189467 14.418 0.508614 14.191L3.49452 12.0675L3.20204 11.8569C2.67789 11.4844 2.26795 11.1935 1.85826 10.9023C1.44697 10.6099 1.03569 10.3163 0.508614 9.94166C0.18965 9.71471 9.26076e-05 9.34601 0 8.95267C2.53475e-08 8.55916 0.189467 8.1895 0.508614 7.9625L11.307 0.287171ZM13.2099 6.88242L16.0677 8.91482C16.6102 9.30065 16.7397 10.0564 16.3567 10.603C15.9736 11.1493 15.2231 11.2796 14.6805 10.894L12 8.98698L3.28778 15.18L10.8042 20.5201V17.2585L8.6065 15.6993L7.93226 15.219C7.38968 14.8332 7.26029 14.0763 7.6433 13.5297C8.02647 12.9836 8.77696 12.8543 9.3195 13.2399L12 15.1433L20.7122 8.95149L13.2099 3.61851V6.88242ZM13.2099 17.2479V20.5106L20.7122 15.18L19.4049 14.2513L18.841 13.8468C18.7019 13.7466 18.5911 13.6215 18.5086 13.4824L13.2099 17.2479ZM3.28778 8.95149C3.6852 9.23398 4.08601 9.52061 4.59514 9.88251L4.60219 9.88488L5.42443 10.4776C5.47499 10.514 5.52102 10.5546 5.56421 10.597L10.8042 6.87295V3.60905L3.28778 8.95149Z" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">兼容性方案</span>
                    <span className="compat-setting-desc">官方方案或者您可以自定义选择</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.0002 14.8866C11.0002 13.4577 10.2377 12.1373 9.00024 11.4227L3.60767 8.30848V15.1132C3.60768 16.1849 4.17957 17.1749 5.10767 17.7108L11.0002 21.1122V14.8866ZM13.0002 21.1122L16.1965 19.2675V12.3856C16.1965 11.0215 15.5008 9.75167 14.3518 9.01649L7.72583 4.77723L4.60767 6.57704L10.0002 9.69032C11.8566 10.7621 13.0002 12.7431 13.0002 14.8866V21.1122ZM18.1965 18.1122L18.8918 17.7108C19.82 17.1749 20.3918 16.185 20.3918 15.1132V8.88661C20.3918 7.81482 19.82 6.82485 18.8918 6.28895L13.5002 3.17567C12.5721 2.63978 11.4284 2.6398 10.5002 3.17567L9.677 3.65028L15.4299 7.33192C17.1534 8.43471 18.1965 10.3396 18.1965 12.3856V18.1122ZM22.3918 15.1132L22.3811 15.4462C22.2708 17.1027 21.3422 18.6059 19.8918 19.4432L14.5003 22.5564C12.9533 23.4496 11.0472 23.4497 9.50015 22.5565L4.10767 19.4432C2.6573 18.6059 1.72872 17.1028 1.61841 15.4462L1.60767 15.1132V5.99989L9.50024 1.44325C11.0472 0.550208 12.9533 0.550126 14.5002 1.44325L19.8918 4.55653C21.4388 5.44969 22.3918 7.10029 22.3918 8.88661V15.1132Z" fill="#1796E2"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">兼容层</span>
                    <span className="compat-setting-desc">官方方案或者您可以自定义选择</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5Z" fill="#AEE352"/>
                      <path d="M8.61919 8.02654C8.88093 7.54044 9.4875 7.35788 9.97368 7.61931C10.4598 7.88105 10.6423 8.48762 10.3809 8.9738L6.88091 15.4738C6.61916 15.9599 6.0126 16.1425 5.52641 15.881C5.04032 15.6193 4.85776 15.0127 5.11919 14.5265L8.61919 8.02654Z" fill="#AEE352"/>
                      <path d="M15.3808 8.02654C15.1191 7.54044 14.5125 7.35788 14.0263 7.61931C13.5402 7.88105 13.3577 8.48762 13.6191 8.9738L17.1191 15.4738C17.3808 15.9599 17.9874 16.1425 18.4736 15.881C18.9597 15.6193 19.1422 15.0127 18.8808 14.5265L15.3808 8.02654Z" fill="#AEE352"/>
                      <path d="M8.99994 18.0001C8.44774 18.0002 7.99993 18.4481 7.99992 19.0003C8.00007 19.5525 8.448 20.0004 9.00019 20.0004L14.9997 20C15.552 20 16.0006 19.5525 16.0006 19.0002C16.0006 18.448 15.5525 18.0003 15.0003 18.0002L8.99994 18.0001Z" fill="#AEE352"/>
                      <path d="M8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19ZM10 19C10 21.7614 7.76142 24 5 24C2.23858 24 0 21.7614 0 19C0 16.2386 2.23858 14 5 14C7.76142 14 10 16.2386 10 19Z" fill="#AEE352"/>
                      <path d="M22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19ZM24 19C24 21.7614 21.7614 24 19 24C16.2386 24 14 21.7614 14 19C14 16.2386 16.2386 14 19 14C21.7614 14 24 16.2386 24 19Z" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">同步模式</span>
                    <span className="compat-setting-desc">选择 Wine 的同步机制，不同机制会影响程序的性能与兼容性</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.99981 20.7677C8.44762 20.7678 7.99981 21.2157 7.9998 21.7679C7.99995 22.3201 8.44787 22.7679 9.00006 22.7679L14.9996 22.7676C15.5519 22.7676 16.0004 22.3201 16.0005 21.7678C16.0005 21.2156 15.5524 20.7679 15.0002 20.7678L8.99981 20.7677Z" fill="#91D62A"/>
                      <path d="M21 17V19H3V17H21ZM22 16V5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V16C2 16.5523 2.44772 17 3 17V19C1.39489 19 0.0842144 17.7394 0.00390625 16.1543L0 16V5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V16C24 17.6569 22.6569 19 21 19V17C21.5523 17 22 16.5523 22 16Z" fill="#91D62A"/>
                      <path d="M13.8379 10.4031L14.9651 11.555L16.0928 10.4031C16.3004 10.1909 16.6369 10.1909 16.8443 10.4031C17.0519 10.6152 17.0519 10.959 16.8443 11.171L15.7166 12.3228L16.8443 13.4751C17.0519 13.6872 17.0519 14.0311 16.8443 14.243C16.6367 14.4552 16.3002 14.4552 16.0928 14.243L14.9651 13.0907L13.8379 14.243C13.6303 14.4552 13.2938 14.4552 13.0863 14.243C12.8787 14.0309 12.8787 13.6871 13.0863 13.4751L14.2137 12.3228L13.0863 11.171C12.8787 10.9589 12.8787 10.615 13.0863 10.4031C13.2938 10.1911 13.6304 10.1911 13.8379 10.4031ZM11.0799 6.0002L11.2333 6.01004C11.5407 6.04488 11.8315 6.17036 12.0702 6.37118L12.1847 6.47724L12.3708 6.66749C12.5785 6.87962 12.5785 7.22344 12.3708 7.43558C12.1632 7.64771 11.8268 7.64771 11.6193 7.43558L11.4331 7.24534C11.3478 7.15817 11.236 7.10324 11.1161 7.08955C10.8568 7.06002 10.6203 7.2265 10.5483 7.47325L10.5292 7.56931L10.3451 9.2584H11C11.2935 9.2584 11.5315 9.50159 11.5315 9.80146C11.5315 10.1013 11.2935 10.3445 11 10.3445H10.2271L9.87861 13.5505C9.85789 13.7415 9.80418 13.9272 9.72001 14.0991C9.34931 14.8565 8.4792 15.19 7.72154 14.8911L7.58086 14.8277L7.29387 14.681C7.0313 14.547 6.925 14.2206 7.05621 13.9525C7.18741 13.6842 7.50679 13.5756 7.7692 13.7096L8.05619 13.8563C8.31877 13.9903 8.63798 13.8817 8.76918 13.6134L8.80356 13.5243L8.822 13.4305L9.15748 10.3445H8C7.70653 10.3445 7.46854 10.1013 7.46854 9.80146C7.46854 9.50159 7.70653 9.2584 8 9.2584H9.27573L9.47254 7.44949C9.56422 6.60775 10.2679 5.9873 11.0799 6.0002Z" fill="#91D62A"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">Dinput函数库</span>
                    <span className="compat-setting-desc">决定dinput.dll和dinput8.dll优先使用游戏自带或wine内置版本</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="survey-section">
        <h2 className="survey-title">点击参与调研问卷</h2>
        <p className="survey-desc">下载体验盖世游戏 Mac 客户端，选择 Steam 下载或本地导入的方式游玩游戏。为了获取更真实的体验数据，<span className="survey-desc-bold">建议累计游玩时长 &gt; 20 分钟后再提交反馈。</span><br/>本次问卷预计需要 3 分钟，感谢您的参与！</p>
        <div className="survey-box">
        </div>
      </section>
    </main>
  )
}
