import { Audio, Discuss } from "react-loader-spinner";

function WritingMessage() {
	return (
		<div className="flex text-lg text-white font-sans">
			<p>ESPERANDO RESPUESTA</p>
			<Discuss
				visible={true}
				height="80"
				width="80"
				ariaLabel="comment-loading"
				wrapperStyle={{}}
				wrapperClass="comment-wrapper"
			/>
		</div>
	);
}
export default WritingMessage;
