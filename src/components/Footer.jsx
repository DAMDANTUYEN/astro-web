import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">✦ Astro Glamping</span>
          <p className="footer-tagline">
            Giữa đất trời, tìm về chính mình.
          </p>
        </div>
        <div className="footer-links">
          <a href="#ve-chung-toi">Về chúng tôi</a>
          <a href="#lich-thien-van">Lịch thiên văn</a>
          <a href="#hanh-trinh">Hành trình</a>
          <a href="#thu-vien">Thư viện</a>
        </div>
        <p className="footer-copy">© 2026 Astro Glamping. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  )
}
