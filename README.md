# ZeroSpark JSON Generator
A simple website that allows you to generate ZeroSpark JSON files. The website provides an easy to use interface where users can select characters, aura, and animations from searchable dropdown menus, easily generating JSON files for use.  


## Features
Currently supports generating the following `CustomizeCharacter` fields:
<ul>
  <li> TargetCharacterID </li>
	<li> AuraFX </li>
	<li> IntroAnimation </li>
	<li> WinAnimation </li>
	<li> BattleAlwaysAuraKey </li>
	<li> AlwaysAuraKey </li>
</ul>

### How to Use

1. **Select a Target Character:**  
   Use the searchable dropdown to choose the character you want to customize.

2. **Choose Aura and Animations:**  
   Choose the character you would like to take the AuraFX, Intro Animation, Win Animation, and assign the Aura Keys using the BattleAlwaysAuraKey and AlwaysAuraKey dropdown menus.

3. **Generate JSON:**  
   After making your selections, click the "Generate JSON" button. This will create a JSON file with your chosen options.

4. **Download or Copy:**  
   Download the generated JSON file or copy its contents into a JSON file.



## Background
I created this website to simplify the process of creating ZeroSpark JSON files for the community, specifically since many people seem to modify the character aura and intro/win animations. Having to create these files by manually going through the character ID and aura key list can be tedious and error-prone, especially for users who aren't sure how to create these files.

### Why did you make this using React?
I wanted to learn React, so I thought this would be a good first project.

### Do you plan to add the other customization options, such as `CreateCharacter` and `SetTransformation`, etc. along with all their option fields?
Yes, I do have plans for adding all the other option fields but I wanted to release what I found people frequently create. Additionally, I do have plans to potentially add some visualization based on the options selected (e.g. visualization of the aura selected based on the character aura and aura key), although these ideas will take some time and will not be implemented any time soon.


## Local Installation and Usage
1. To begin with, make sure to install [Node](https://nodejs.org/en) and [NPM](https://www.npmjs.com/).
2. To install, download or clone this repo with:
```
git clone https://github.com/0Abdu/zerospark-json-generator.git
```
3. Navigate to the `zerospark-json-generator` directory and install the packages using:
```
npm install
```
4. Run the project locally using the following command:
```
npm run dev
```


## Resources
- [ZeroSpark JSON Fields](https://docs.google.com/document/d/1j4UlY0VKLknGRoFrgagQwBPumxbaOfqOmYWiHD3VTvw/edit?usp=sharing)
- [Sparking Zero ID List](https://docs.google.com/spreadsheets/d/177M1Uro7EtHebWKhYr8-P4D62jLuhEl7JLCVHirWFbE/edit?usp=sharing)

