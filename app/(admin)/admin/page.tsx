import '../global.css'
import styles from "@/app/(blogsite)/page.module.css";
import React from "react";

export default function Page() {

    return (
        <section className="dashboard">
            <div className="top">
                <i className="uil uil-bars sidebar-toggle"></i>

                <div className="search-box">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="dash-content">
                <div className="overview">
                    <div className="title">
                        <i className="uil uil-tachometer-fast-alt"></i>
                        <span className="text">admin/page</span>
                    </div>
                    <div className="activity">
                        <div className="activity-data">
                            <div className="data names">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}