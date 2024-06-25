import { useTranslation } from 'react-i18next'

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="error-container">
            <h1>{t("error_404")}</h1>
            <p>{t("error_description")}</p>
        </div>
    );
}

export default NotFound;