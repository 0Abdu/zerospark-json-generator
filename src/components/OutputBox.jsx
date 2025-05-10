import './OutputBox.css'

import { useRef } from 'react';

function DownloadButton ({ jsonData, fileName }) {
	const handleDownload = () => {
		const blob = new Blob([jsonData], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${fileName}.json`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}

	return (
		<button className="button" onClick={handleDownload}> Download JSON</button>
	);
}


function OutputBox ({ jsonData, fileName }){
	const outputRef = useRef(null);
	return(
		<div className="output-section">
			<textarea className="json-output" 
			value={jsonData} 
			readOnly rows="12"
			ref={outputRef}></textarea>
			<div className="output-actions">
				<button
					className="button"
					onClick={() => {
						navigator.clipboard.writeText(jsonData);
						outputRef.current.select();
					}}
				> Copy </button>
				<DownloadButton
				jsonData={jsonData}
				fileName={fileName}
				 />
			</div>
		</div>
	); 

}

export default OutputBox