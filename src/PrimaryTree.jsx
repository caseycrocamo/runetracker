import { mainRune, keystone as keystoneRuneType } from './configuration/runetype';
import { loadConfiguration } from './configuration/treeconfig';
import RuneIcon from './RuneIcon';
function PrimaryTree(params){
    const {primaryTreeName, keystoneId, selectedRuneIds} = params;
    const configuration = loadConfiguration(primaryTreeName);
    const runeWidth = 'w-10';
    const keystoneRowClass = `w-64 flex justify-between`;
    const row1class = `${runeWidth} col-span-${12/(configuration[1].length)}`;
    const row2class = `${runeWidth} col-span-${12/(configuration[2].length)}`;
    const row3class = `${runeWidth} col-span-${12/(configuration[3].length)}`;
    
    return (
        <div class="rune-tree w-full">
            <div class="flex items-center font-semibold text-xl">
                <img class="w-20" src={configuration.iconSrc}></img>
                <span class="w-20 text-[#648f68] pl-8">{configuration.name}</span>
            </div>
            <div class={keystoneRowClass}>
                <For each={configuration.keystones} fallback={<div>Loading...</div>}>
                    {(keystone) =>
                        <div class="w-16">
                            <RuneIcon runeTree={primaryTreeName} runeName={keystone.displayName} selected={keystone.id === keystoneId} runeType={keystoneRuneType} imgSrcOverride={keystone.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <For each={configuration[1]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row1class}>
                        <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[2]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row2class}>
                        <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
            <For each={configuration[3]} fallback={<div>Loading...</div>}>
                {(rune) =>
                    <div class={row3class}>
                        <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} runeType={mainRune} imgSrcOverride={rune.imgSrcOverride}/>
                    </div>
                }
            </For>
        </div>
    );
}
export default PrimaryTree;