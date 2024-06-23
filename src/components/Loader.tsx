import { FC } from 'react';
import { LuLoader2 } from 'react-icons/lu';
import './Loader.scss';

const Loader: FC = () => {
    return (
        <div className="loader">
            <LuLoader2 className="loader-icon" />
        </div>
    );
};

export default Loader;