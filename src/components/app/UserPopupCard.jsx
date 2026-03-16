import { InfoIcon } from "@/components/app/icons"

export function UserPopupCard({ user }) {
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
