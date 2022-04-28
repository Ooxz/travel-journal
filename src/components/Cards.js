export default function Cards(props) {
	return (
		<div className="card-container">
			<img src={props.img} alt="" className="card-img" />
			<div className="card-info">
				<div className="location-wrap">
				<img className="map-logo" src="./images/maps.png" alt="map logo" />
				<p className="card-location">{props.location}</p>
				<a href={props.link} className="link" target="_blank" rel="noreferrer">View on Google Maps</a>
				</div>
				<h3 className="card-title">{props.title}</h3>
				<p className="card-date">{props.date}</p>
				<p className="card-description">{props.description}</p>
				</div>
			<p></p>
			</div>
	)
}