import "./style.css";
import Slider from "react-slick";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState, useContext } from "react";

const CatSlider = (props) => {
  const [allData, setAllData] = useState(props.data);
  const [totalLength, setTotalLength] = useState([]);
  const context = useContext(MyContext);

  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  const slider = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth > 992 ? true : false,
    autoplay: context.windowWidth > 992 ? 2000 : false,
    centerMode: context.windowWidth > 992 ? true : false,
  };

  var catLength = 0;
  var lengthArr = [];
  useEffect(() => {
    allData.length !== 0 &&
      allData.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArr.push(catLength);
        catLength = 0;
      });
    const list = lengthArr.filter(
      (item, index) => lengthArr.indexOf(item) === index
    );
    setTotalLength(list);
  }, []);

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid" ref={slider}>
          <h2 className="hd">Featured Categories</h2>
          <Slider
            {...settings}
            className="cat_slider_Main"
            id="cat_slider_Main"
          >
            {allData.length !== 0 &&
              allData.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                      <div
                        className="info"
                        style={{ background: itemBg[index] }}
                      >
                        <img src={item.image} width="80" />
                        <h5 className="text-capitalize mt-3">
                          {item.cat_name}
                        </h5>
                        <p>{totalLength[index]} items</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
