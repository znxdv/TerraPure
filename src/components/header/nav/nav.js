import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import GridViewIcon from "@mui/icons-material/GridView";
import { useState } from "react";
import Button from "@mui/material/Button";
import { MyContext } from "../../../App";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Nav = (props) => {
  const [navData, setNavData] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownMenu, setDropdownMenu] = useState(false);
  const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);

  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setNavData(props.data);
  }, []);

  useEffect(() => {
    setIsOpenNav(props.openNav);
  }, [props.openNav]);

  const closeNav = () => {
    props.closeNav();
  };

  const openDropdownFun = (index) => {
    setDropdownMenu(!openDropdownMenu);
    setDropdownMenuIndex(index);
  };

  return (
    <>
      {isOpenNav === true && (
        <div className="navbarOverlay" onClick={props.closeNav}></div>
      )}
      <div
        className={`nav d-flex align-items-center ${
          isOpenNav === true && "click"
        }`}
      >
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab res-hide">
                <GridViewIcon /> &nbsp;Browse All Categories{" "}
                <KeyboardArrowDownIcon />
              </Button>
            </div>

            <div className="col-sm-8 part2 position-static">
              <nav className={isOpenNav === true ? "open" : ""}>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link to={"/"} onClick={props.closeNav}>
                        Home
                      </Link>
                    </Button>
                  </li>
                  {navData.length !== 0 &&
                    navData.map((item, index) => {
                      return (
                        <li className="list-inline-item" key={index}>
                          <Button onClick={() => openDropdownFun(index)}>
                            <a
                              href={`${
                                windowWidth > 992
                                  ? `/cat/${item.cat_name.toLowerCase()}`
                                  : "#"
                              }`}
                              onClick={() =>
                                sessionStorage.setItem(
                                  "cat",
                                  item.cat_name.toLowerCase()
                                )
                              }
                            >
                              {item.cat_name}{" "}
                              <KeyboardArrowDownIcon
                                className={`${
                                  openDropdownMenu === true &&
                                  openDropdownMenuIndex === index &&
                                  "rotateIcon"
                                }`}
                              />
                            </a>
                          </Button>
                          {item.items.length !== 0 && (
                            <div
                              className={`dropdown_menu ${
                                openDropdownMenu === true &&
                                openDropdownMenuIndex === index &&
                                "open"
                              }`}
                            >
                              <ul>
                                {item.items.map((item_, index_) => {
                                  return (
                                    <li key={index_}>
                                      <Button onClick={props.closeNav}>
                                        <a
                                          href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                          onClick={() =>
                                            sessionStorage.setItem(
                                              "cat",
                                              item.cat_name.toLowerCase()
                                            )
                                          }
                                        >
                                          {item_.cat_name}
                                        </a>
                                      </Button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  <li className="list-inline-item position-static">
                    <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                      <Link>
                        Shop{" "}
                        <KeyboardArrowDownIcon
                          className={`${openMegaMenu === true && "rotateIcon"}`}
                        />
                      </Link>
                    </Button>
                    <div
                      className={`dropdown_menu megaMenu w-100 ${
                        openMegaMenu === true && "open"
                      }`}
                    >
                      <div className="row">
                        {props.data.length !== 0 &&
                          props.data.map((item, index) => {
                            return (
                              <div className="col">
                                <a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                  {" "}
                                  <h4 className="text-g text-capitalize">
                                    {item.cat_name}
                                  </h4>
                                </a>
                                {item.items.length !== 0 && (
                                  <ul className="mt-4 mb-0">
                                    {item.items.map((item_, index) => {
                                      return (
                                        <li>
                                          <Link
                                            onClick={props.closeNav}
                                            to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                              .replace(/\s/g, "-")
                                              .toLowerCase()}`}
                                          >
                                            {item_.cat_name}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            );
                          })}

                        <div className="col">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  {}
                  <li className="list-inline-item">
                    <Button>
                      <Link>Contact</Link>
                    </Button>
                  </li>
                </ul>

                {windowWidth < 992 && (
                  <>
                    {context.isLogin !== "true" && (
                      <div className="pl-3 pr-3">
                        <br />
                        <Link to={"/signIn"}>
                          <Button
                            className="btn btn-g btn-lg w-100"
                            onClick={closeNav}
                          >
                            Sign In
                          </Button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
