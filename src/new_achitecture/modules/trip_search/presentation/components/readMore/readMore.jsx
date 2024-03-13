import React from 'react';
import readMoreStyles from "./readMore.module.css";
import dataForReadMore from "./readMoreJson.json";
import FooterComponent from "./FooterComponent/FooterComponent";
import FindBudget from "./ButtonsComponent/Find&Budget";
import BookingHostel from "./ButtonsComponent/Booking&Hostel"

export const readMore = () => {
const data = dataForReadMore[0];
    // console.log(data)

    return (
        <div>
            <header className={readMoreStyles.container_fluid}>
                <div className={readMoreStyles.headline}>
                    <a aria-current="page" href="/budgettraveltips/">
                        <h1 className={readMoreStyles.headline__logo}>
                            CheapTrip
                        </h1>
                    </a>
                    <h6 className={readMoreStyles.headline__slogan}>
                        Pay less, visit more!
                    </h6>
                </div>
            </header>
            <FindBudget />
            <div style={{ textAlign: "center" }}>
                <h2 className={readMoreStyles.section_title}>
                    {data.title}
                </h2>
            </div>
            <div className={readMoreStyles.container}>
                <img className={readMoreStyles.city_img_attraction} alt="City Attraction Image" className={readMoreStyles.image} src={data.imageUrl} />
                <h3 className={readMoreStyles.title}>
                    {data.description}
                </h3>
                <p className={readMoreStyles.text}>
                    {data.text}
                </p>
                <div className={readMoreStyles.links}>
                    <a href={data.relatedSiteLink} id="link_1" target="_blank">
                        Visit related site
                    </a>
                    <a href={data.descriptionLink} id="link_2" target="_blank">
                    </a>
                    <a href={data.descriptionLink} id="link_3" target="_blank">
                    </a>
                </div>
            </div>
            <BookingHostel />
            <FooterComponent />
        </div>
    );
};
