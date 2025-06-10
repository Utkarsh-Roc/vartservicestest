import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";

const dataList = [
    {
        image1: '/images/portfolio/rastertovector1.jpg',
        image2: '/images/portfolio/rastertovector2.jpg',
        image3: '/images/portfolio/rastertovector3.jpg',
        image4: '/images/portfolio/rastertovector4.jpg',
        image5: '/images/portfolio/rastertovector5.jpg',
        title: '',
        description: ''
    }
]

const dataList2 = [
    {
        image1: '/images/portfolio/digitizing1.jpg',
        image2: '/images/portfolio/digitizing2.jpg',
        image3: '/images/portfolio/digitizing3.jpg',
        image4: '/images/portfolio/digitizing4.jpg',
        image5: '/images/portfolio/digitizing5.jpg',
        image6: '/images/portfolio/digitizing6.jpg',
        image7: '/images/portfolio/digitizing7.jpg',
        image8: '/images/portfolio/digitizing8.jpg',
        image9: '/images/portfolio/digitizing9.jpg',
        image10: '/images/portfolio/digitizing10.jpg',
        image11: '/images/portfolio/digitizing11.jpg',
        image12: '/images/portfolio/digitizing12.jpg',
        image13: '/images/portfolio/digitizing13.jpg',
        image14: '/images/portfolio/digitizing14.jpg',
        image15: '/images/portfolio/digitizing15.jpg',
        image16: '/images/portfolio/digitizing16.jpg',
        image17: '/images/portfolio/digitizing17.jpg',
        image18: '/images/portfolio/digitizing18.jpg',
        image19: '/images/portfolio/digitizing19.jpg',
        image20: '/images/portfolio/digitizing20.jpg',
        image21: '/images/portfolio/digitizing21.jpg',
        image22: '/images/portfolio/digitizing22.jpg',
        title: '',
        description: ''
    }
]

const dataList3 = [
    {
        image1: '/images/portfolio/logo1.jpg',
        image2: '/images/portfolio/logo2.jpg',
        image3: '/images/portfolio/logo3.jpg',
        image4: '/images/portfolio/logo4.jpg',
        image5: '/images/portfolio/logo5.jpg',
        image6: '/images/portfolio/logo6.jpg',
        image7: '/images/portfolio/logo7.jpg',
        title: '',
        description: ''
    }
]

const dataList4 = [
    {
        image1: '/images/portfolio/simple1.jpg',
        image2: '/images/portfolio/simple2.jpg',
        image3: '/images/portfolio/simple3.jpg',
        image4: '/images/portfolio/simple4.jpg',
        image5: '/images/portfolio/simple5.jpg',
        image6: '/images/portfolio/simple6.jpg',
        image7: '/images/portfolio/simple7.jpg',
        image8: '/images/portfolio/simple8.jpg',
        image9: '/images/portfolio/simple9.jpg',
        image10: '/images/portfolio/simple10.jpg',
        image11: '/images/portfolio/simple11.jpg',
        image12: '/images/portfolio/simple12.jpg',
        image13: '/images/portfolio/simple13.jpg',
        image14: '/images/portfolio/simple14.jpg',
        image15: '/images/portfolio/simple15.jpg',
        image16: '/images/portfolio/simple16.jpg',
        image17: '/images/portfolio/simple17.jpg',
        imag18: '/images/portfolio/simple18.jpg',
        image19: '/images/portfolio/simple19.jpg',
        image20: '/images/portfolio/simple20.jpg',
        image21: '/images/portfolio/simple21.jpg',
        image22: '/images/portfolio/simple22.jpg',
        image23: '/images/portfolio/simple23.jpg',
        image24: '/images/portfolio/simple24.jpg',
        image25: '/images/portfolio/simple25.jpg',
        image26: '/images/portfolio/simple26.jpg',
        image27: '/images/portfolio/simple27.jpg',
        image28: '/images/portfolio/simple28.jpg',
        image29: '/images/portfolio/simple29.jpg',
        image30: '/images/portfolio/simple30.jpg',
        image31: '/images/portfolio/simple31.jpg',
        image32: '/images/portfolio/simple32.jpg',
        image33: '/images/portfolio/simple33.jpg',
        image34: '/images/portfolio/simple34.jpg',
        image35: '/images/portfolio/simple35.jpg',
        image36: '/images/portfolio/simple36.jpg',
        image37: '/images/portfolio/simple37.jpg',
        image38: '/images/portfolio/simple38.jpg',
        image39: '/images/portfolio/simple39.jpg',
        image40: '/images/portfolio/simple40.jpg',
        image41: '/images/portfolio/simple41.jpg',
        image42: '/images/portfolio/simple42.jpg',
        image43: '/images/portfolio/simple43.jpg',
        image44: '/images/portfolio/simple44.jpg',
        image45: '/images/portfolio/simple45.jpg',
        image46: '/images/portfolio/simple46.jpg',
        image47: '/images/portfolio/simple47.jpg',
        image48: '/images/portfolio/simple48.jpg',
        image49: '/images/portfolio/simple49.jpg',
        image50: '/images/portfolio/simple50.jpg',
        image51: '/images/portfolio/simple51.jpg',
        image52: '/images/portfolio/simple52.jpg',
        image53: '/images/portfolio/simple53.jpg',
        image54: '/images/portfolio/simple54.jpg',
        title: '',
        description: ''
    }
]

const TabFour = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-12">
                                    <div className="rn-default-tab style-three">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Raster & Vector</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Digitizing</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Mockup & Logo Design</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Simple, Standard & Complex</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                            <img src={`${val.image1}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                            <img src={`${val.image2}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                            <img src={`${val.image3}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                            <img src={`${val.image4}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                            <img src={`${val.image5}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList2.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <img src={`${val.image1}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image2}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image3}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image4}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image5}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image6}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image7}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image8}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image9}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image10}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image11}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image12}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image13}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image14}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image15}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image16}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image17}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image18}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image19}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image20}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image21}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                        <img src={`${val.image22}`} alt="card Images" style={{height: "30vh"}} className="p-5"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList3.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                            <img src={`${val.image1}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image2}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image3}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image4}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image5}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image6}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image7}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>


                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-12 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList4.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                            <img src={`${val.image1}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image2}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image3}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image4}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image5}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image6}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image7}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image8}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image9}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image10}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image11}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image12}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image13}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image14}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image15}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image16}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image17}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image18}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image19}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image20}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image21}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image22}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image23}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image24}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image25}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image26}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image27}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image28}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image29}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image30}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image31}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image32}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image33}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image34}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image35}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image36}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image37}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image38}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image39}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image40}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image41}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image42}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image43}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image44}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image45}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image46}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image47}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image48}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image49}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image50}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image51}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image52}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image53}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                            <img src={`${val.image54}`} alt="card Images" style={{height: "30vh"}} className="p-5" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabFour
