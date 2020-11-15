export default function Post(props) {

	
	console.log(props);

	console.log(props.item);
	let {id,title,body} = props.item;
	return (<div>
		<div>ID:{id} </div> 
		<div>TITLE:{title} </div> 
		<div>BODY:{body} </div> 
		

			</div>);
}