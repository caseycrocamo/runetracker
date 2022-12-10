import { keystone, statRune } from "./configuration/runetype";

function RuneIcon(props){
    const {runeTree, runeName, imgSrcOverride, selected, runeType} = props;
    const trimmedRuneName = runeName.replace(/\s+/g, '');
    const keystoneType = runeType === keystone;
    const statRuneType = runeType === statRune;
    const runeImageSrc = imgSrcOverride ? imgSrcOverride : `src/assets/${runeTree}/${trimmedRuneName}/${trimmedRuneName}.png`;
    const statRuneImageSrc = `src/assets/${runeTree}/${trimmedRuneName}.png`
    const imgSrc = statRuneType ? statRuneImageSrc : runeImageSrc;
    const borderClass =  (selected && !keystoneType) ? 'ring-2 ring-blue-500': '';
    const grayScale = selected ? '' : 'grayscale';
    const imgClass = `${borderClass} ${grayScale} rounded-full`;
    return (<img class={imgClass} src={imgSrc}></img>);
}
export default RuneIcon;