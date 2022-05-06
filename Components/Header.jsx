/* eslint-disable @next/next/no-img-element */
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LogOut from "../Components/LogOut";

function Header({Menu}) {
  const Router = useRouter();
  const [Login, setLogin] = useState(false);
  const [menu, setMenu] = useState(Menu);
  var UserReuest = false;

  useEffect(() => {
    console.log(Menu)
    const login = JSON.parse(localStorage.getItem("login"));
    localStorage.setItem("Menu", JSON.stringify(menu));
    const data = JSON.parse(localStorage.getItem("Menu"));
    setLogin(login && login);
  },[menu]);

  const Logout = async () => {
    const logoutData = LogOut();
    setLogin(false);
    localStorage.setItem("login", JSON.stringify(false));
  };

  return (
    <>
      <header id="main-header">
        <div className="main-header bg-[#061326]">
          <Container fluid>
            <Row>
              <Col>
                <Navbar expand="lg" className="p-0">
                  <Navbar.Brand className="navbar-brand" href="/">
                    <img
                      className="w-64 object-contain pl-3 m-3"
                      src="https://developer.zingotv.com/uploads/images/default/wbbtv-logo.png"
                      alt="worldbbTV"
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Collapse className="">
                    <div className="menu-main-menu-container">
                      <Nav
                        as="ul"
                        id="top-menu"
                        className="ml-auto items-center flex"
                      >
                        {/* {rednerMenuComponent} */}
                        {menu &&
                          menu.map((items, i) => {
                            return (
                              <li
                                className="p-3
                                "
                                key={i}
                              >
                                <Link href={`${items.uri}`}>
                                  <a
                                    className={
                                      Router.asPath === `${items.uri}`
                                        ? "font-bold text-xl no-underline border-b-[3px] border-[#0220bb]"
                                        : "font-bold text-xl no-underline hover:border-b-[3px] border-[#0220bb]"
                                    }
                                    style={{ color: "white" }}
                                  >
                                    {items.title}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        <Link href="/search" passHref>
                          <a className="curser-pointer">
                            <Image
                              src="https://developer.zingotv.com/uploads/images/default/icons/search_icon_default.png"
                              width="50"
                              height="40"
                              alt=""
                            />
                          </a>
                        </Link>
                        <li className="p-3">
                          {Login ? (
                            <a
                              className="login no-underline font-bold text-xl cursor-pointer"
                              style={{ color: "white" }}
                              onClick={() => Logout()}
                            >
                              Log Out
                            </a>
                          ) : (
                            <Link href="/login">
                              <a
                                className="text-xl no-underline font-bold cursor-pointer"
                                style={{ color: "white" }}
                              >
                                Log In
                              </a>
                            </Link>
                          )}
                        </li>
                        <Link href="/signup" passHref>
                          <a
                            className="signup-btn no-underline text-center cursor-pointer"
                            style={{ color: "white" }}
                          >
                            Sign Up
                          </a>
                        </Link>
                      </Nav>
                    </div>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header;
