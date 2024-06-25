import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    return (
        <div className="error-container">
            <h1>{t("error_404")}</h1>
            <p>{t("error_description")}</p>
            <button className='button not-found' onClick={()=>navigate('/')}>{t("go_home")}</button>
        </div>
    );
}

export default NotFound;