import '../../global.css'
import {Post} from "@/app/dbData/dbData";
import Link from "next/link";
import {getAdminData} from "@/app/(admin)/adminBackend/getData";
import React from "react";
export default async function Page() {
    let sample: Post[] = getAdminData();

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
                        <span className="text">Texts</span>
                    </div>
                    <div className="activity">
                        <div className="activity-data">
                            <div className="data names">
                                <span className="data-title">Name</span>
                                {
                                    sample.map((post: Post) => {
                                        return (
                                            <h4 key={post.title}>
                                                <Link
                                                    href={`/admin/texts/edit/${post.id}`}
                                                    as={`/admin/texts/edit/${post.id}`}>
                                                    {/*// as={`/admin/texts/edit/${slug(post.title)}:id=${post.id}`}>*/}
                                                    {post.title}</Link>
                                            </h4>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}