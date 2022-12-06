import { loadConfiguration } from './configuration/treeconfig';
import RuneIcon from './RuneIcon';
function PrimaryTree(params){
    const {primaryTreeName, keystoneId, selectedRuneIds} = params;
    const configuration = loadConfiguration(primaryTreeName);
    const runeWidth = 'w-16';
    
    return (
        <div class="rune-tree">
            <div class='flex align-items'>
                <img class="w-20" src={configuration.iconSrc}></img>
                <span>{configuration.name}</span>
            </div>
            <div class="keystones flex space-between">
                <For each={configuration.keystones} fallback={<div>Loading...</div>}>
                    {(keystone) =>
                        <div class="w-20">
                            <RuneIcon runeTree={primaryTreeName} runeName={keystone.displayName} selected={keystone.id === keystoneId} keystone={true} imgSrcOverride={keystone.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <div class="row1 flex space-between">
                <For each={configuration[1]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <div class="row2 flex space-between">
                <For each={configuration[2]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
            <div class="row3 flex space-between">
                <For each={configuration[3]} fallback={<div>Loading...</div>}>
                    {(rune) =>
                        <div class={runeWidth}>
                            <RuneIcon runeTree={primaryTreeName} runeName={rune.displayName} selected={selectedRuneIds.includes(rune.id)} keystone={false} imgSrcOverride={rune.imgSrcOverride}/>
                        </div>
                    }
                </For>
            </div>
        </div>
    );
}
export default PrimaryTree;