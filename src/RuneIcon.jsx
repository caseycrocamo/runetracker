function RuneIcon(props){
    const {runeTree, runeName, imgSrcOverride, selected, keystone} = props;
    const trimmedRuneName = runeName.replace(/\s+/g, '');
    const imgSrc = imgSrcOverride ? imgSrcOverride : `src/assets/${runeTree}/${trimmedRuneName}/${trimmedRuneName}.png`;
    const borderClass =  (selected && !keystone) ? 'ring-2 ring-blue-500': '';
    const grayScale = selected ? '' : 'grayscale';
    const imgClass = `${borderClass} ${grayScale} rounded-full`;
    return (<img class={imgClass} src={imgSrc}></img>);
}
export default RuneIcon;