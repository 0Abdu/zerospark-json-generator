import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './SearchableDropdown.css'

function SearchBar({ getSearchValue, onOption, onFilterTextChange, onClick, ref }) {
	return (
		<input
			className="search-bar"
			type="text"
			value={getSearchValue()}
			placeholder='Search...'
			onChange={(e) => {
				onOption(null);
				onFilterTextChange(e.target.value);
				}}
			onClick={onClick}
			ref={ref}
		/>
	)
}

function Option({ option, label, onSelection, isSelected, selectedOptionRef }) {
	const optionClass = "option " + (isSelected ? "selected" : "");
	return (
		<div
			ref={isSelected ? selectedOptionRef : null}
			className={optionClass}
			onClick={() => onSelection(option)}
		>
			{label}
		</div>
	);
}

function OptionsList ({ 
	options, 
	filterText,
	getOptionLabel,
	getOptionValue,
	selectedOption,
	onSelection, 
	selectedOptionRef 
}) {
	const entries = options
	.filter(option =>
		getOptionLabel(option).toLowerCase().includes(filterText.toLowerCase())
	)
	.map(option => {
		const label = getOptionLabel(option);
		const value = getOptionValue(option);
		return (
			<Option
				key={value}
				option={option}
				label={label}
				onSelection={onSelection}
				isSelected={selectedOption && getOptionLabel(selectedOption) === label}
				selectedOptionRef={selectedOptionRef}
			/>
		);
	});

	return (
		<div className="options-outer">
			<div className="options-inner"> 
				{entries}
			</div>
		</div>
	);
}

function SearchableDropdown( { 
	options,
	labelName,
	selectedOption,
	onOption,
	getOptionLabel,
	getOptionValue,
	getOptionDescription
}) {
	const [filterText, setFilterText] = useState(""); // search bar input
	const [isOpen, setIsOpen] = useState(false); // dropdown state
	const inputRef = useRef(null); // ref to search bar
	const selectedOptionRef = useRef(null);

	// Check if dropdown is opened, 
	// if so scrolls down to selected option.
	useEffect(() => {
		if (isOpen && selectedOptionRef.current) {
		  selectedOptionRef.current.scrollIntoView({ block: "center" });
		}
	  }, [isOpen]);

	// Add click even listener to the document.
	// Execute toggle whenever a click on the document occurs. 
	useEffect(() => {
		document.addEventListener("click", toggle);
		return () => document.removeEventListener("click", toggle);
	}, []);

	function toggle(e) {
		setIsOpen(e && e.target === inputRef.current);
	}
	
	function handleSelection(option) {
		setFilterText("");
		setIsOpen(false);
		onOption(option);
	}

	function getSearchValue(){
		if (filterText) return filterText;
		if (selectedOption) return getOptionLabel(selectedOption);
		return ""
	}

	function getSearchDescription() {
		if (selectedOption) return getOptionDescription(selectedOption);
		return "";
	}
	return (
		<div className="dropdown">
				<label className="dropdown-label"> {labelName} </label> 
					<div style={{position: 'relative'}}>
						<SearchBar 
							getSearchValue={getSearchValue}
							onOption={onOption}
							onFilterTextChange={setFilterText}
							onClick={toggle}
							ref={inputRef}
							/>
						<span className="dropdown-icon">
						<FontAwesomeIcon icon={faCaretDown} />
						</span>
						<span> {getSearchDescription()} </span>
					</div>
					{isOpen && (
					<OptionsList
						options={options}
						filterText={filterText}
						getOptionLabel={getOptionLabel}
						getOptionValue={getOptionValue}
						selectedOption={selectedOption}
						onSelection={handleSelection}
						selectedOptionRef={selectedOptionRef}
					/>
					)}
		</div>
	)
}

export default SearchableDropdown;