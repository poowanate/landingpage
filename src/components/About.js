import React from "react";
import "../css/story.css";
import "../css/about.css";
const About = () => {
  return (
    <div className="page">
     
     <div class="container-ab">
        <div class="left">
            <h1 class="title">ABOUT</h1>
            <div class="name">
            <span className="bold" style={{ display:''}}>Noritake
         <svg  style={{ width: '30px', marginLeft:'1rem'}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="28" height="28" rx="9" stroke="black" stroke-width="2"/>
<path d="M7 13.6965C7 13.1082 7.25903 12.5498 7.70815 12.1697L13.7082 7.09305C14.4538 6.46212 15.5462 6.46212 16.2919 7.09305L22.2919 12.1697C22.741 12.5498 23 13.1082 23 13.6965V20.611C23 21.7156 22.1046 22.611 21 22.611H9C7.89543 22.611 7 21.7156 7 20.611V13.6965Z" stroke="black" stroke-width="2"/>
<rect x="12" y="16.6111" width="6" height="6" rx="1" stroke="black" stroke-width="2"/>
</svg>
</span>
            </div>
            <p class="subtitle-ab">插畫家/設計師/藝術家</p>
            <p class="subtitle-ab bold" style={{fontSize: '12px'}}>Artist / Illustrator / Designer</p>
        </div>
        <div class="right">
        <h1 class="title" style={{    visibility: 'collapse'}}>-</h1>
            <p class="description-ab ">
                主要以黑白單色調繪畫為主。作品廣泛應用於國內外廣告，書籍以及雜誌，時尚，壁畫等。活動範圍廣泛，包括設計以及指導等各種活動。並積極創作以插畫為主的筆記本等產品。
            </p>
        </div>
    </div>

    </div>
  );
};

export default About;
