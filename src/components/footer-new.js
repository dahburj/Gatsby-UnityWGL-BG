import React from "react";
import styled from "styled-components";
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/icon.css';

class Footer extends React.Component {
	render() {
		const StyledDiv = styled.div`
			text-shadow: none;
			text-align: center;
			position: relative;
			bottom: 0;
			background: rgba(0,0,0,0.5);
			width: 100%;
			display: block;
			justify-content: center;
			align-items: center;
			.ui.grid {
				margin: 0;
			}
			p, h4 {
				text-align: left;
				margin: 5px 0;
				padding: 0;
				font-size: 75%;
				a, a:hover, a:active, a:visited {
					display: inline-block;
					margin: 0 0 0 5px;
					color: white;
					text-decoration: none;
				}
			}
		`;
		return (
			<StyledDiv>
				<div className="ui stackable five column grid">
					<div className={'column'}>
						<div>
							<p><strong>Website credits</strong></p>
						</div>
					</div>
					<div className={'column'}>
						<div>
							<p>Performance by</p>
							<p><strong>Purity</strong>
								<a href={'https://www.instagram.com/_purely_/'} target={'_blank'}>
									<i className={'icon instagram'} />
								</a>
								<a href={'https://m.youtube.com/channel/UCPqtSdtwN6Hw27ixxvyjPvg'} target={'_blank'}>
									<i className={'icon youtube'} />
								</a>
								<a href={'https://music.apple.com/za/artist/pure/1434858066'} target={'_blank'}>
									<i className={'icon music'} />
								</a>
							</p>
							<p><strong>Thola </strong>
								<a href={'https://www.instagram.com/blackskintravelling/'} target={'_blank'}>
									<i className={'icon instagram'} />
								</a>
								<a href={'https://www.facebook.com/thola.antamu'} target={'_blank'}>
									<i className={'icon facebook'} />
								</a>
							</p>
						</div>
					</div>
					<div className="column">
						<div>
							<p>Film makers</p>
							<p><strong>Marcel and Ben </strong>
							<a href={'https://www.instagram.com/duvenagemarcel'} target={'_blank'}>
								<i className={'icon instagram'} />
							</a>
							<a href={'https://marcelduvenage.com/'} target={'_blank'}>
								<i className={'icon external link'} />
							</a>
							</p>
						</div>
					</div>
					<div className="column">
						<div>
							<p>Design, Programming</p>
							<p><strong>Marc </strong>
								<a href={'https://www.marcfehr.media'} target={'_blank'}>
									<i className={'icon external link'} />
								</a>
							</p>
						</div>
					</div>
					<div className="column">
						<div>
							<p>Director</p>
							<p><strong>Sam </strong>
								<a href={'mailto:sam.duby@tfe.energy'} >
									<i className={'icon envelope'} />
								</a>
							</p>
						</div>
					</div>
				</div>
			</StyledDiv>
		);
	}
}
export default Footer;
