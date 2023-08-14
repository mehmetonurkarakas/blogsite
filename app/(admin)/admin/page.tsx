import '../global.css'
export default function Page() {

    // const sample: Post[] = [
    //     {
    //         title: "Birinci yazım Birinci yazım Birinci yazım Birinci yazım Birinci yazım",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         slug: "birinci-yazim",
    //         createdAt: new Date("2021-11-08"),
    //         publishedAt: new Date("2021-11-09"),
    //         modifiedAt: new Date("2021-11-10")
    //     },
    //     {
    //         title: "İKinci yazım İKinci yazım İKinci yazım İKinci yazım İKinci yazım",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         slug: "birinci-yazim",
    //         createdAt: new Date("2021-11-08"),
    //         publishedAt: new Date("2022-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     },
    //     {
    //         title: "Üçüncü yazım Üçüncü yazım Üçüncü yazım ",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         slug: "birinci-yazim",
    //         createdAt: new Date("2021-11-08"),
    //         publishedAt: new Date("2022-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     }
    // ]

    return (
        <body>
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                    {/*<img src="images/logo.png" alt="">*/}
                </div>

                <span className="logo_name">Admin Panel</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        {/*<Link className={styles.contentLink}*/}
                        {/*      href={`/articles`}*/}
                        {/*      as = {`/blog/articles`}>*/}
                        {/*    Topics</Link>*/}

                        <a href="/admin/articles">
                        <i className="uil uil-estate"></i>
                        <span className="link-name">Topics</span>
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
                        <span className="text">HomePage</span>
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
        </body>
    );
}