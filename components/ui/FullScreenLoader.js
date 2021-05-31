import Image from 'next/image'
import classes from './FullScreenLoader.module.css';
const FullScreenLoader = () => {
    return (
        <div className={classes.fullScreenContainer}>
            <Image
                src="/spinner.gif"
                alt="Picture of the author"
                width={100}
                height={100}
            />
        </div>
    )
}

export default FullScreenLoader;