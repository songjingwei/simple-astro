import { InfoIcon } from "@/components/app/icons"
import { UserLevelBadgeSvg } from "@/components/app/AppPageSectionSvgs"

export function UserPopupCard({ user }) {
  // 定义等级颜色映射 (Steam 风格)
  const getLevelColor = (level) => {
    const levelNum = parseInt(level);
    if (levelNum === 461) return "#8659AE"; // 461级紫色
    if (levelNum === 251) return "#5F91C4"; // 251级蓝色
    if (levelNum === 213) return "#C45F5F"; // 213级红色
    if (levelNum === 177) return "#8659AE"; // 177级紫色
    if (levelNum === 159) return "#5F91C4"; // 159级蓝色
    if (levelNum === 152) return "#5F91C4"; // 152级蓝色
    if (levelNum === 131) return "#C4C45F"; // 131级黄色
    if (levelNum === 50) return "#5F91C4";  // 50级蓝色
    if (levelNum === 23) return "#BF654A";  // 23级铜色
    if (levelNum === 10) return "#711E30";  // 10级深红色
    
    if (levelNum < 100) return "#BF654A";
    if (levelNum < 200) return "#5F91C4";
    if (levelNum < 300) return "#8659AE";
    return "#8659AE";
  };

  const levelColor = getLevelColor(user.level);

  return (
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
          <UserLevelBadgeSvg level={user.level} color={levelColor} />
          <span>{user.level}</span>
        </div>
      </div>
      <div className="user-stats-bar">
        <div className="user-stat-item">
          <span className="user-stat-value">{user.value}</span>
          <span className="user-stat-label">
            账号价值
            <InfoIcon />
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
}
