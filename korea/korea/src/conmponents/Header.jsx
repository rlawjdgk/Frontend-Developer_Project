import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.div`
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

// 메뉴 리스트 스타일링
const Menu = styled.ul`
  list-style: none;
  display: ${({ isMobile, isOpen }) =>
    isMobile
      ? isOpen
        ? "flex"
        : "none"
      : "flex"}; // 모바일: 열리면 flex, 닫히면 none / 데스크톱: 항상 flex
  flex-direction: ${({ isMobile }) =>
    isMobile ? "column" : "row"}; // 모바일: 세로 정렬, 데스크톱: 가로 정렬
  margin: 0;
  padding: 0;
  position: ${({ isMobile }) =>
    isMobile ? "absolute" : "static"}; // 모바일: 절대 위치, 데스크톱: 정적 위치
  top: 70px;
  right: 10px;
  background-color: ${({ isMobile }) =>
    isMobile ? "#444" : "transparent"}; // 모바일: 배경색 지정, 데스크톱: 투명
  border-radius: ${({ isMobile }) =>
    isMobile ? "8px" : "0"}; // 모바일: 모서리 둥글게, 데스크톱: 모서리 없음
  box-shadow: ${({ isMobile }) =>
    isMobile
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "none"}; // 모바일: 그림자 추가, 데스크톱: 그림자 없음
  z-index: 999; // 메뉴가 다른 요소 위에 나타나도록 설정
`;

const MenuItem = styled.li`
  margin: 10px 15px;

  @media (min-width: 391px) {
    margin: 0 15px;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s ease;
  &:hover {
    color: #f8a2aa;
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 화면 너비에 따른 모바일 상태

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 현재 상태 반대로 전환
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 화면 너비가 768px 이하인지 확인
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // 화면이 커지면 메뉴를 닫음
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 등록
    return () => {
      window.removeEventListener("resize", handleResize); // 리사이즈 이벤트 제거
    };
  }, []);

  return (
    <HeaderWrap>
      <Nav>
        {/* 로고 */}
        <Img>
          <a href="#home">
            <img src="../public/img/logo.png" alt="logo" />
          </a>
        </Img>
        {/* 로고 메뉴 아이콘 */}
        {isMobile && (
          <MenuIcon onClick={toggleMenu}>
            <IoMenu />
          </MenuIcon>
        )}
        {/* 메뉴 리스트 */}
        <Menu isMobile={isMobile} isOpen={isMenuOpen}>
          <MenuItem>
            <MenuLink href="#home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#culture">Culture</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#attractions">Attractions</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#food">Food</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#transportation">Transportation</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
