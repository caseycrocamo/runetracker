import { loadConfiguration } from './configuration/treeconfig';
import RuneIcon from './RuneIcon';
function SecondaryTree(params){
    const {secondaryTreeName, selectedRuneIds, selectStatRuneIds} = params;
    const configuration = loadConfiguration(secondaryTreeName);
    const runeWidth = 'w-16';
    const row1class = `${runeWidth} col-span-${12/(configuration[1].length)}`;
    const row2class = `${runeWidth} col-span-${12/(configuration[2].length)}`;
    const row3class = `${runeWidth} col-span-${12/(configuration[3].length)}`;
    
    return (
        <div class="rune-tree grid grid-cols-12 grid-rows-7">
            <img class="w-20 col-span-6" src={configuration.iconSrc}></img>
            <span class="col-span-6">{configuration.name}</span>
            <For each={configuration[1]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row1class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[2]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row2class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[3]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row3class}>
                        <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
        </div>
    );
}
export default SecondaryTree;