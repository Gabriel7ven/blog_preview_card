import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: hsl(47, 88%, 63%);
	display: flex;
	justify-content: center;
	align-items: center;

	
    `;

export const Card = styled.div`
	width: 355px;
	height: 455px;
	padding: 20px;
	background-color: white;
	border: 2px solid black;
	border-radius: 15px;
	position: relative;
	box-shadow: 10px 10px;
	`;

export const Header = styled.header`
	width: 100%;
	height: 100px;
	background-color: hsl(47, 88%, 63%);
	border: 2px solide black;
	border-radius: 10px;

    `;

export const BannerImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 15px;
    `;

export const Button = styled.button`
	background-color: hsl(47, 88%, 63%);
	border: none;
	padding: 7px 10px;
	border-radius: 5px;
	font-weight: 800;
	font-size: 12px;
	margin-bottom: 10px;
	`;


export const Published = styled.p`
	font-size: 13px;
	margin-bottom: 15px;
	`;

export const Title = styled.h1`
	font-size: 1.3rem;
	margin-bottom: 15px;
	font-weight: 800;
	`;

export const Article = styled.p`
	color: hsl(0, 0%, 42%);
	`;

export const Footer = styled.footer`
	position: absolute;
	bottom: 20px;
	display: flex;
	align-items: center;
	`;

export const Avatar = styled.img`
	bottom: 0px;
    width: 30px;

    `;

export const Name = styled.span`
	font-size: 13px;
	margin-left: 10px;
	font-weight: 800;
    `; 

export const Attribution = styled.p`
	position: absolute;
	bottom: 5px;
	`;