import { loadConfiguration } from './configuration/treeconfig';
import RuneIcon from './RuneIcon';
function SecondaryTree(params){
    const {secondaryTreeName, selectedRuneIds, selectStatRuneIds} = params;
    const configuration = loadConfiguration(secondaryTreeName);
    const runeWidth = 'w-16';
    
    return (
        <div class="rune-tree">
            <div class='flex align-items'>
                <img class="w-20" src={configuration.iconSrc}></img>
                <span>{configuration.name}</span>
            </div>
            <div class="row1 flex space-between">
                <For each={configuration[1]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <div class="row2 flex space-between">
                <For each={configuration[2]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <div class="row3 flex space-between">
                <For each={configuration[3]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={secondaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
        </div>
    );
}
export default SecondaryTree;