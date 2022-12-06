function RuneIcon(props){
    const {runeTree, runeName} = props;
    const trimmedRuneName = runeName.replace(/\s+/g, '');
    const imgSrc = `src/assets/${runeTree}/${trimmedRuneName}/${trimmedRuneName}.png`
    return (<img src={imgSrc}></img>);
}
export default RuneIcon;