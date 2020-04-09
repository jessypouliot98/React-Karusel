import React from 'react'
import ReactDOM from 'react-dom'
import Karusel from 'karusel'

class ReactKarusel extends React.Component {

	CONTAINER = React.createRef();
	KARUSEL = undefined;

	componentDidMount(){
		this.init();
	}

	init = async() => {
		const prevArrow = await this.getElementFromJSX(this.props?.settings?.prevArrow);
		const nextArrow = await this.getElementFromJSX(this.props?.settings?.nextArrow);

		const settings = { ...this.props.settings };
		if( prevArrow ) settings.prevArrow = prevArrow;
		if( nextArrow ) settings.nextArrow = nextArrow;

		this.KARUSEL = new Karusel(this.CONTAINER.current, settings);
	}

	getElementFromJSX = (element) => {
		return new Promise((resolve, reject) => {
			const tempHTML = document.createElement('div');

			if( React.isValidElement(element) ){
				ReactDOM.render(element, tempHTML, () => {
					resolve(tempHTML.firstChild);
				});

			} else {
				resolve(element);
				
			}
		});
	}

	render(){

		return(
			<div
				className={['react-karusel', this.props.className].join(' ')}
				style={this.props.style}
				ref={this.CONTAINER}
			>
				{this.props.children}
			</div>
		);
	}

}

export default ReactKarusel
