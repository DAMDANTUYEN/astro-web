import './BortleSlider.css'

const labels = [
  { value: 10, label: 'Thành Phố', bortle: 'Bortle 9' },
  { value: 30, label: 'Ngoại Ô', bortle: 'Bortle 7' },
  { value: 50, label: 'Làng Quê', bortle: 'Bortle 5' },
  { value: 70, label: 'Vùng Trống', bortle: 'Bortle 4' },
  { value: 90, label: 'Mũi Dinh', bortle: 'Bortle 2' },
]

export default function BortleSlider({ value, onChange }) {
  const currentLabel = [...labels].reverse().find((l) => value >= l.value) || labels[0]

  return (
    <section id="bortle" className="bortle-section">
      <div className="bortle-inner">
        <div className="bortle-header">
          <span className="bortle-tag">✦ TƯƠNG TÁC ĐẶC BIỆT</span>
          <h2 className="bortle-title">
            Kéo để <span className="bortle-highlight">thay đổi</span> bầu trời
          </h2>
          <p className="bortle-desc">
            Trải nghiệm sự khác biệt giữa bầu trời thành phố ô nhiễm ánh sáng và bầu trời đạt chuẩn quốc tế tại Mũi Dinh.
          </p>
        </div>

        <div className="bortle-display">
          <span className="bortle-current-label">{currentLabel.label}</span>
          <span className="bortle-current-bortle">{currentLabel.bortle}</span>
        </div>

        <div className="bortle-track-wrapper">
          <div className="bortle-labels">
            <span className="bortle-end-label">Thành Phố<br /><small>Bortle 9</small></span>
            <span className="bortle-end-label">Mũi Dinh<br /><small>Bortle 2</small></span>
          </div>
          <div className="bortle-track">
            <div className="bortle-track-fill" style={{ width: `${value}%` }} />
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="bortle-input"
            />
            <div className="bortle-thumb" style={{ left: `${value}%` }} />
          </div>
          <div className="bortle-labels">
            <span className="bortle-end-label">Ô nhiễm<br /><small>Ánh sáng cao</small></span>
            <span className="bortle-end-label">Tối chuẩn<br /><small>Quốc tế</small></span>
          </div>
        </div>

        <div className="bortle-info">
          <div className="bortle-info-item">
            <span className="bortle-info-icon">🌆</span>
            <span>Ánh sáng nhân tạo che lấp hoàn toàn các vì sao</span>
          </div>
          <div className="bortle-info-arrow">→</div>
          <div className="bortle-info-item">
            <span className="bortle-info-icon">🌌</span>
            <span>Dải Ngân hà rực rỡ hiện ra bằng mắt thường</span>
          </div>
        </div>
      </div>
    </section>
  )
}
