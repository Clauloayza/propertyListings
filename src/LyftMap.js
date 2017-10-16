import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
 import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './index.css';

const Menu =({model}) => {

}

const LyftMap = ({model}) => {

	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: model.filteredProperties,
		isFiltering: model.isFiltering,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		//this.setState({
		//	activeProperty: property,
		//});
		model.setActiveProperty(property);

		const {index} = property;

		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
			//jump(target, {
			//	duration: 800,
			//	easing: easeInOutCubic,
			//});
		}
	}
	const onPathBntClick = () => {
		model.setFilter(10);
	}

	return (<div>
			<div className="container">
				<div className="row">
					
					<div className="col-lg-6 col-md-6 col-xs-6">
					<button className="cta-button">
						<span className="icon icon-list glyphicon glyphicon-info-sign" aria-hidden="true"></span>
					</button>
					<GoogleMaps
						model = {model}
						properties={properties}
						activeProperty={activeProperty}
						setActiveProperty={setActiveProperty}
						filteredProperties={filteredProperties}
						isFiltering={isFiltering}
						isRouting={isRouting}
					/>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-6">
						<header>
							<img src="./images/house-location-pin.svg"/>
							<h1>"Property"
							<br/>
							"Listings"</h1>
							<button className="btn-filter" onClick={onPathBntClick}>Filter</button>
						</header>
						<div className="cards">
							<div className="cards-list">
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="card col-xs-12 col-md-6 col-lg-4">
									<img src='./images/property1.jpg' alt="Singer"/>
									<p className="price">$937,180</p>
									<div className="details">
										<span className="index">1</span>
										<p className="location">"Singer" <br/> "914 Argyle Road"</p>
										<ul>
											<li className="icon-bed">
												"2"
												<span>bedrooms</span>
											</li>
											<li className="icon-bath">
												"2"
												<span>bathrooms</span>
											</li>
											<li className="icon-car">
												"2"
												<span>parking spots</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>);
}


export default LyftMap;