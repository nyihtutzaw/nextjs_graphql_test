import classes from './CharacterContainer.module.css';
const DescriptionItem = ({ title, value }) => {
    return (
        <div className={classes.descriptionItem}>
            <p>{title} : </p>
            <p>{value}</p>
        </div>
    )
}

export default DescriptionItem;