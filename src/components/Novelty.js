import React from "react";
import "../css/novelty.css";

const Novelty = () => {
  return (
    <div className="page">
      <div
        className="story-container titlenovelty "
        style={{ placeItems: "center" }}
      >
        NOVELTY

      </div>
      
      <div class="highlight dot-highlight">
        <span className="dot">全門市滿額限定好禮</span>
      </div>
      <div class="gridnovelty body-content container">
        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2023.12.1 <span className="dot-highlightnov-black">五</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card1"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 年曆海報
            </p>
            <button className="button-black-nov paddingLR">消費不限金額</button>
          </div>
        </div>

        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2024.1.<span className="dot-highlightnov-black">一</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card2"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 眼鏡盒布組
            </p>
            <button className="button-black-nov paddingLR">滿2,990元</button>
          </div>
        </div>
        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2024.2.<span className="dot-highlightnov-black">四</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card3"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 圓抱枕
            </p>
            <button className="button-black-nov paddingLR">滿4,290元</button>
          </div>
        </div>
        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2024.3.<span className="dot-highlightnov-black">五</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card4"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 吸管杯
            </p>
            <button className="button-black-nov paddingLR">滿3,490元</button>
          </div>
        </div>
        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2024.4.<span className="dot-highlightnov-black">一</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card5"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 筆記本
            </p>
            <button className="button-black-nov paddingLR">滿3,490元</button>
          </div>
        </div>
        <div class="item ">
          <div className="pd2">
            <span class="date datail row">2024.5.<span className="dot-highlightnov-black">三</span> <div className="arrow"></div></span>

            <div class="card mt-25 detail">
              <div className="card6"></div>
            </div>

            <p className="mt-25 detail">
              {" "}
              <span className=" dot-highlightnov">送</span> 托特包
            </p>
            <button className="button-black-nov paddingLR">滿3,490元</button>
          </div>
        </div>
      </div>
      <div className="middle mt-2rem">
      <button className="buttonrounded ">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
            <line
              x1="14.7178"
              y1="10.2824"
              x2="21.0818"
              y2="16.6464"
              stroke="white"
            />
            <line
              x1="14.0107"
              y1="23.0105"
              x2="20.3747"
              y2="16.6465"
              stroke="white"
            />
          </svg>
          <span>前往OWNDAYS官方分店</span>{" "}
        </button>
      </div>
     
    </div>
  );
};

export default Novelty;
