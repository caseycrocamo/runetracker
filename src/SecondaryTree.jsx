import { mainRune, statRune } from './configuration/runetype';
import { loadConfiguration, statRunes } from './configuration/treeconfig';
import RuneIcon from './RuneIcon';
function SecondaryTree(params){
    const {secondaryTreeName, selectedRuneIds, selectedStatRuneIds} = params;
    const configuration = loadConfiguration(secondaryTreeName);
    const runeWidth = 'w-10';
    const row1class = `${runeWidth} col-span-${12/(configuration[1].length)}`;
    const row2class = `${runeWidth} col-span-${12/(configuration[2].length)}`;
    const row3class = `${runeWidth} col-span-${12/(configuration[3].length)}`;
    const statRuneClass = 'w-6 col-span-4';
    
    return (
        <div class="rune-tree grid grid-cols-12 grid-rows-7 w-full">
            <img class="w-20 col-span-6" src={configuration.iconSrc}></img>
            <span class="col-span-6">{configuration.name}</span>
            <For each={configuration[1]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row1class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[2]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row2class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[3]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row3class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={statRunes[1]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={statRuneClass}>
                        <RuneIcon runeTree={statRunes.name} runeName={rune.displayName} selected={selectedStatRuneIds[1] === rune.id} runeType={statRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={statRunes[2]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={statRuneClass}>
                        <RuneIcon runeTree={statRunes.name} runeName={rune.displayName} selected={selectedStatRuneIds[2] === rune.id} runeType={statRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={statRunes[3]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={statRuneClass}>
                        <RuneIcon runeTree={statRunes.name} runeName={rune.displayName} selected={selectedStatRuneIds[3] === rune.id} runeType={statRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
        </div>
    );
}
export default SecondaryTree;