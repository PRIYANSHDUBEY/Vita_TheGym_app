import React from 'react'
import Cardclasses from './CardClasses';
import Cardupdates from './Cardupdates';
import Vitabtn from './Vitabtn';

export default function Classes() {
    const data = [
        { id: 1, linkName: "Monday, 10:00 - 10:50", title: "AEROBICS" },
        { id: 2, linkName: "Monday, 10:00 - 10:50", title: "ABS & BOOTY" },
        { id: 3, linkName: "Monday, 10:00 - 10:50", title: "POWERYOGA" },
        { id: 4, linkName: "Monday, 10:00 - 10:50", title: "AEROBICS" },
        { id: 5, linkName: "Monday, 10:00 - 10:50", title: "POWERYOGA" },
        { id: 6, linkName: "Monday, 10:00 - 10:50", title: "AEROBICS" },
        { id: 7, linkName: "Monday, 10:00 - 10:50", title: "ABS & BOOTY" },
        { id: 8, linkName: "Monday, 10:00 - 10:50", title: "AEROBICS" }
    ]
    const updates = [
        {
            id:1,
            head: "NO SALSA 03/02",
            page: "The salsa lessons of February 3 will not be able to continue due to Covidcontamination of Annick. So we will have to skip a week and wish Annick a speedy recovery! Next week we will start again! ",
            link: "Read More",
        },
        {
            id:2,
            head: "UPDATE CONSULTATION COMMITTEE 22/12",
            page: "The indoor sports activities may continue, this was decided today at theconsultation committee. That means that the Vita, and all the activities andclasses we organize, can continue! See you soon?! ",
            link: "Read More",
        }
    ]
    return (
        <section id="classes" className="classes_sec">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12 bk_imgclass">
                        <div className="vitaclasses">
                            <div className="vita_classes">
                                <h4 className="vita_title">Our</h4>
                                <h2>Classesss</h2>
                            </div>
                            <div className="row g-0 ">
                                {data.map((value) => {
                                    return (
                                        <Cardclasses key={value.id} title={value.title} linkName={value.linkName} />
                                    )
                                })}
                              <Vitabtn text="VIEW ALL CLASSES"/>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm-12 bk_imgnews">
                        <div className="vitanews">
                            <div className="vita_news">
                                <h4 className="vita_title">News</h4>
                                <h2>Updates</h2>
                            </div>
                            <div className="row g-0 ">
                                <div className="col-md-12">
                                    {updates.map((value) => {
                                        return (
                                            <Cardupdates key={value.id} head={value.head} page={value.page} link={value.link} />
                                        )
                                    })}
                                 <Vitabtn text ="READ ALL NEWS"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
