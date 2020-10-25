import React, {Fragment, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import InvestmentsLife from "./InvestmentsLife";
import InvestStart from "./InvestStart";
import withWidth from "@material-ui/core/withWidth";
import Greeting from "./Greeting";
import TraderPortair from "./TraderPortair";
import Calculator from "./calculator/Calculator";
import InvestorRanks from './InvestorRanks';
import Offers from "./Offers";
import ImageBeginner from "./images/imageBeginner.png";
import OurEfficiency from "./OurEfficiency";
import Pricing from "./Pricing";


const Home = ({selectHome, openTermsDialog, width}) => {
    const [traderImage, setTraderImage] = useState(ImageBeginner)
    const [traderName, setTraderName] = useState('Начинающий инвестор')
    const [traderDescription, setTraderDescription] = useState(``)

    const onTraderChanged = (img, name, discr) => {
        setTraderImage(img)
        setTraderName(name)

        switch (name) {
            case "Начинающий инвестор":
                setTraderDescription(`Из-за неопытности и небольшого капитала вкладываются в небольшой круг 
                дешевых акций. Не имеют возможности или желания рисковать. Не знают тонкости основных 
                финансовых процессов, поэтому совершают много ошибок и подвержены панике при падении 
                стоимости акций, преобладающих в их портфеле.
                Следующие стратегии позволят достигнуть желаемого и избежать ошибок большинства новичков.`)
                break;
            case "Опытный инвестор":
                setTraderDescription(`Отличаются достаточным капиталом для совершения рискованных приобретений. Покупают  акции разных компаний в умеренных объемах. Могут предположить возможное изменение ценности акции, исходя из известной информации. Часть капитала могут использовать на получение прибыли при помощи спекуляций. Постоянно увеличивает свой капитал за счёт основного дохода`)
                break;
            case "Инвестор-эксперт":
                setTraderDescription(`Большой оборот сделок в год. Капитал позволяет делать прибыль на краткосрочных вложениях в акции крупных компаний. Экономическое образование и огромный опыт помогают предугадывать множество характерных изменений на бирже. Умеют составлять сбалансированный по доходности и рискам инвесторский портфель`)
                break;
        }

    }

    const refTop = useRef();

    useEffect(() => {
        selectHome();
    }, [selectHome]);

    return (
        <Fragment>
            <div ref={refTop}/>
            <Greeting/>
            <InvestmentsLife/>
            <OurEfficiency/>
            <InvestorRanks onTraderChanged={onTraderChanged}/>
            <Calculator/>
            <TraderPortair
                Image={traderImage}
                TraderName={traderName}
                TraderDescription={traderDescription}/>
            <Offers/>
            <Pricing/>
            <InvestStart/>
        </Fragment>
    );
}

Home.propTypes = {
    selectHome: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
};

export default withWidth()(Home);
