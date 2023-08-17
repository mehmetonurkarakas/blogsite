import '../../global.css'
import {Post} from "@/app/dbData/dbData";
import Link from "next/link";
import {getAdminData} from "@/app/(admin)/adminBackend/getData";
export default async function Page() {
    let sample: Post[] = getAdminData();

    return (
        <body>
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                </div>

                <span className="logo_name">Admin Panel</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li><a href="#">
                        <i className="uil uil-estate"></i>
                        <span className="link-name">Texts</span>
                    </a></li>
                    <li>
                        <a href="/admin/texts">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Comments</span>
                        </a>
                    </li>
                </ul>

                <ul className="logout-mode">
                    <li><a href="#">
                        <i className="uil uil-signout"></i>
                        <span className="link-name">Logout</span>
                    </a></li>
                </ul>
            </div>
        </nav>

        <section className="dashboard">
            <div className="top">
                <i className="uil uil-bars sidebar-toggle"></i>

                <div className="search-box">
                    <i className="uil uil-search"></i>
                    {/*<input type="text" placeholder="Search here...">*/}
                </div>

                {/*<img src="images/profile.jpg" alt="">*/}
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
        </body>
    );
}