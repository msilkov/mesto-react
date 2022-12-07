export default function Popup(props) {
	function handleOverlay(e) {
    if (e.target ===e.currentTarget) {
      props.onClose()
      
    }    console.log("run");
    console.log(e.target);
    console.log(e.currentTarget);
    
  }

	return (
		<article onClick={handleOverlay} className={props.className}>
			{props.children}
		</article>
	);
}
