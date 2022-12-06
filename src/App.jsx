import styles from './App.module.css';
import RuneIcon from './RuneIcon';

const runesJson = {
	"generalRunes": [
		{
			"displayName": "Guardian",
			"id": 8465,
			"rawDescription": "perk_tooltip_Guardian",
			"rawDisplayName": "perk_displayname_Guardian"
		},
		{
			"displayName": "Shield Bash",
			"id": 8401,
			"rawDescription": "perk_tooltip_ShieldBash",
			"rawDisplayName": "perk_displayname_ShieldBash"
		},
		{
			"displayName": "Bone Plating",
			"id": 8473,
			"rawDescription": "perk_tooltip_BonePlatingTooltip",
			"rawDisplayName": "perk_displayname_BonePlating"
		},
		{
			"displayName": "Unflinching",
			"id": 8242,
			"rawDescription": "perk_tooltip_Unflinching",
			"rawDisplayName": "perk_displayname_Unflinching"
		},
		{
			"displayName": "Zombie Ward",
			"id": 8136,
			"rawDescription": "perk_tooltip_ZombieWard",
			"rawDisplayName": "perk_displayname_ZombieWard"
		},
		{
			"displayName": "Relentless Hunter",
			"id": 8105,
			"rawDescription": "perk_tooltip_8105",
			"rawDisplayName": "perk_displayname_8105"
		}
	],
	"keystone": {
		"displayName": "Guardian",
		"id": 8465,
		"rawDescription": "perk_tooltip_Guardian",
		"rawDisplayName": "perk_displayname_Guardian"
	},
	"primaryRuneTree": {
		"displayName": "Resolve",
		"id": 8400,
		"rawDescription": "perkstyle_tooltip_7204",
		"rawDisplayName": "perkstyle_displayname_7204"
	},
	"secondaryRuneTree": {
		"displayName": "Domination",
		"id": 8100,
		"rawDescription": "perkstyle_tooltip_7200",
		"rawDisplayName": "perkstyle_displayname_7200"
	},
	"statRunes": [
		{
			"id": 5005,
			"rawDescription": "perk_tooltip_StatModAttackSpeed"
		},
		{
			"id": 5008,
			"rawDescription": "perk_tooltip_StatModAdaptive"
		},
		{
			"id": 5002,
			"rawDescription": "perk_tooltip_StatModArmor"
		}
	]
};
function App() {
  const primaryTree = runesJson.primaryRuneTree.displayName;
  const secondaryTree = runesJson.secondaryRuneTree.displayName;
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class="rune-container">
          <div class="rune-tree">
            <img src="src/assets/7200_Domination.png"></img>
            <div class="keystones">
              <RuneIcon runeTree={primaryTree} runeName="Guardian" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
