import React, { useState } from "react";
import TabNavItem from "./TabUtil/TabNavItem";
import TabContent from "./TabUtil/TabContent";
import WebPortfolio from "../../components/WebPortfolio/WebPortfolio";
import './Portfolio.css'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <section className="portfolio">
            <div class="portfolio__head container">
                <h3 className="portfolio__head-left">
                    <span class="portfolio__project-title">Projects:</span>
                </h3>
                <div class="portfolio__head-right">
                    <p>
                        Each one of my projects are an aspect of my ability to hone my designing 
                        and programing abilities. I learn something new from each and every project I do.
                    </p>
                    {/* <a href="/#">Explore More <i class="uil uil-arrow-right"></i></a> */}
                </div>
            </div>


            <div className="tabs__container container">
                <ul className="tabs__nav">
                    <TabNavItem title="Websites/Apps" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Games" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Designs" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
                    {/* <TabNavItem title="Tab 4" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                </ul>

                <div className="tabs__panel">
                    <TabContent id="tab1" activeTab={activeTab}>
                        <WebPortfolio />
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                        <p>Works in progress!</p>
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                        <p>Works in progress!</p>
                    </TabContent>
                    {/* <TabContent id="tab4" activeTab={activeTab}>
                        <p>tab4 works!</p>
                    </TabContent> */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;