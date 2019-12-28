import React from "react";
import { scroller } from 'react-scroll'
import styled from "styled-components";
import LINKS from '../constants/links'

class Navbar extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			isActive: -1
		}
	}
	scrollTo (element) {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	};
	render() {
		const StyledList = styled.ul` 
		@media screen and (max-width: 500px) {
			margin: 1rem auto !important;
			width: 100%;
			align-items: center;
			justify-content: center;
		  display: none;
      flex-flow: row wrap;
			li {
				font-size: .7rem;
				text-align: center;
				align-self: center;
				flex: 1 auto;
			}
			} 
		`;
		const TopSocialButton = styled.a`
			color: white; 
			float: left;
	    list-style: none;
	    padding: 0 1rem;
	    font-size: 1.2rem;
	    text-decoration: none;
	    font-size: 0.9rem;
	    span {
	      border-bottom: 2px solid transparent;
		    &:hover {
		      border-bottom: 2px solid white;
	      }
	    } 
		`
		const NavIcons = styled.div`
			position: fixed;
			right: .5rem;
			@media screen and (max-width: 1024px) {
				display: none;
			}
		`;
		const linkMap = LINKS.filter(link => link.visible).map((link, i) => (
			<li
				key={`menu-item-${i}`}
				onClick={() => this.scrollTo(link.scrollTo)}
			>
				<span>{link.title}</span>
			</li>
		));
		const NavBar = styled.nav`
		position: fixed;
		display: flex;
  		align-items: center;
  		justify-content: center;
  		top: 0;
  		left: 0;
  		right: 0;
  		height: auto;
  		background: rgba(0,0,0,0);
  		z-index: 100;
			color: white;
			font-family: 'Orbitron', sans-serif;
			font-size: 2rem;
			ul {
				margin: 1rem auto;
				padding-left: 0 !important;
				li {
					float: left;
					list-style: none;
					padding: 0 1rem;
					font-size: 1.2rem;
					@media screen and (max-width: 599px) {
						padding: 0 0.25rem;
						font-size: 0.8rem;
					}
					border-bottom: 2px solid transparent;
					span:hover {
						// background: rgba(255,255,255,0.2);
						border-bottom: 2px solid white;
						cursor: pointer;
					}
				}
			}
		`
		
		return (
			<NavBar>
				<StyledList
					isOpen={this.state.isOpen}
				>
					{ linkMap }
				</StyledList>
				{/*
				<NavIcons>
					<TopSocialButton className={'top-button-social'}
						 href={'https://medium.com/tfe-energy-says'}
					   target={'_blank'}
					>
						<span><i className={'icon medium'} /> We say...</span>
					</TopSocialButton>
					<TopSocialButton className={'tob-button-social'}
					   href={'https://medium.com/work-with-tfe-energy'}
					   target={'_blank'}
					>
						<span><i className={'icon medium'} /> Get involved</span>
					</TopSocialButton>
				</NavIcons>
				*/}
			</NavBar>
		);
	}
}
export default Navbar;
