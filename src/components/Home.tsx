import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home-message">
            <p>{t("home_message")}</p>
        </div>
    );
}

export default Home