export default function User(props) {

	let onePostByIdUser = props.getOnePostByIdUser;
	console.log(props);

	console.log(props.item);
	let {id, name, email} = props.item;
	return (<div>
		{id} - {name} - {email}

		<div>
			<button onClick={() => onePostByIdUser(id)}>Show posts</button>
		</div>

	</div>);
}