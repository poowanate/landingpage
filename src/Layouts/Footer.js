import React from 'react'
import "../css/footer.css";
const Footer = () => {
  return (
    <div>
        
      
    <footer>
        <div class="container containerFooter">
            <div class="grid">
                <div>
                    <p  className='bold' >搜尋商品</p >
                    <ul>
                        <li>眼鏡</li>
                        <li>太陽眼鏡</li>
                        <li>隱形眼鏡</li>
                        <li>品牌一覽</li>
                        <li>搜尋特集</li>
                    </ul>
                </div>
                <div>
                    <p  className='bold' >關於購買</p >
                    <ul>
                        <li>關於鏡片</li>
                        <li>安心保證</li>
                    </ul>
                </div>
                <div>
                    <p  className='bold' >關於OWNDAYS</p >
                    <ul>
                        <li>門市查詢</li>
                        <li>服務一覽</li>
                        <li>鏡片更換</li>
                        <li>OWNDAYS MEMBERSHIP</li>
                        <li>公司簡介</li>
                        <li>招募資訊</li>
                        <li>EYE CAMP</li>
                    </ul>
                </div>
                <div>
                    <p  className='bold' >支援服務</p >
                    <ul>
                        <li>聯絡我們</li>
                        <li>常見問題</li>
                        <li>建議使用環境</li>
                        <li>網站地圖</li>
                        <li>初次使用者</li>
                        <li>註冊為新會員</li>
                    </ul>
                </div>
                <div>
                    <p  className='bold' >客戶服務中心聯絡</p >
                    <div class="gridcontract">
    <div class="gridcontractitem bold">0800-002-118</div>
    <div class="gridcontractitem">服務時間</div>
    <div class="gridcontractitem">11:00 - 22:00</div>
  </div>
                
                  
                </div>
            </div>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="footer-bottom">
                
                <p>衛部醫器製壹字第20121031號 北市衛器廣字第109090046號</p>
            </div>
        </div>
    </footer>
    <p>會員隱私權規範 | 會員服務條款使用規範 | Taiwan | 中文 (繁體) |</p>
                <p>衛部醫器製壹字第20121031號 北市衛器廣字第109090046號</p>

    <div class="back-to-top">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
</svg> TOP</a>
        </div>
        <div class="chat-icon">
            <a href="#"><i class="fas fa-comment-dots"></i></a>
        </div>
    </div>
  )
}

export default Footer