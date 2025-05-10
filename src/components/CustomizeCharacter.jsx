import { useState, useEffect } from 'react'
import './CustomizeCharacter.css'
import SearchableDropdown from './SearchableDropdown';
import OutputBox from './OutputBox';


function CustomizeCharacter( { charactersData, auraKeys }) {
	const [targetCharacter, setTargetCharacter] = useState(null);
	const [auraCharacter, setAuraCharacter] = useState(null);
	const [introAnimation, setIntroAnimation] = useState(null);
	const [winAnimation, setWinAnimation] = useState(null);
	const [battleAura, setBattleAura] = useState(null);
	const [alwaysAura, setAlwaysAura] = useState(null);
	const [isGenerated, setIsGenerated] = useState(false);
	const [jsonData, setJsonData] = useState("");

	useEffect(() => {
		if (!targetCharacter) return;
		const customizeCharacter = Object.fromEntries(
			Object.entries({
			TargetCharacterID: targetCharacter.characterID ?? null,
			AuraFX: auraCharacter?.characterID ?? null,
			IntroAnimation: introAnimation?.characterID ?? null,
			WinAnimation: winAnimation?.characterID ?? null,
			BattleAlwaysAuraKey: battleAura?.Key ?? null,
			AlwaysAuraKey: alwaysAura?.Key ?? null,
			}).filter(([_, value]) => value !== null)
		);
		const data = {
			"ZeroSparkVersion": 1,
			[targetCharacter.characterName]: {
				CustomizeCharacter: customizeCharacter,

			},
		};
		setJsonData(JSON.stringify(data, null, 2));
	}, [targetCharacter, 
		auraCharacter, 
		introAnimation, 
		winAnimation, 
		battleAura, 
		alwaysAura]
	);


	return (
	
	  <div className="customize-character">
		<h3> Customize Character</h3>
		<SearchableDropdown 
			options={charactersData} 
			labelName="Target Character"
			selectedOption={targetCharacter}
			onOption={(option) => setTargetCharacter(option)}
			getOptionLabel={(option) => option.characterName}
			getOptionValue={(option) => option.characterID}
			getOptionDescription={(option) => ""}
		/>
		<SearchableDropdown 
			options={charactersData} 
			labelName="Aura From"
			selectedOption={auraCharacter}
			onOption={(option) => setAuraCharacter(option)}
			getOptionLabel={(option) => option.characterName}
			getOptionValue={(option) => option.characterID}
			getOptionDescription={(option) => ""}
		/>
		<SearchableDropdown 
			options={charactersData} 
			labelName="Intro Animation"
			selectedOption={introAnimation}
			onOption={setIntroAnimation}
			getOptionLabel={(option) => option.characterName}
			getOptionValue={(option) => option.characterID}
			getOptionDescription={(option) => ""}
		/>
		<SearchableDropdown 
			options={charactersData} 
			labelName="Win Animation"
			selectedOption={winAnimation}
			onOption={(option) => setWinAnimation(option)}
			getOptionLabel={(option) => option.characterName}
  			getOptionValue={(option) => option.characterID}
			getOptionDescription={(option) => ""}
		/>
		<SearchableDropdown 
			options={auraKeys} 
			labelName="Battle Always Aura Key"
			selectedOption={battleAura}
			onOption={(option) => setBattleAura(option)}
			getOptionLabel={(option) => option.KeyTranslated}
  			getOptionValue={(option) => option.Key}
			getOptionDescription={(option) => option.Description}
		/>
		<SearchableDropdown 
			options={auraKeys} 
			labelName="Always Aura Key"
			selectedOption={alwaysAura}
			onOption={(option) => setAlwaysAura(option)}
			getOptionLabel={(option) => option.KeyTranslated}
  			getOptionValue={(option) => option.Key}
			getOptionDescription={(option) => option.Description}
		/>
		<div className="output-actions">
		<button 
				disabled={!targetCharacter}
				onClick={() => setIsGenerated(true)}
			>
				Generate JSON
				</button>
		</div>
		{isGenerated && (
			<OutputBox
			jsonData={jsonData}
			fileName={"customize_character"}
			/>
		)}

	  </div>
	)
  }
  
  export default CustomizeCharacter
  