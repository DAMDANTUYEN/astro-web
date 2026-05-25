import { Link } from 'react-router-dom'
import './Booking.css'

export default function Booking() {
  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1 className="booking-title">✦ ĐẶT VÉ VÀO VŨ TRỤ</h1>
        <p className="booking-desc">
          Tính năng đang được phát triển. Vui lòng quay lại sau!
        </p>
        <p className="booking-sub">
          Dự kiến ra mắt: <strong>28/05/2026</strong>
        </p>
        <Link to="/" className="booking-back">← Quay về trang chủ</Link>
      </div>
    </div>
  )
}
