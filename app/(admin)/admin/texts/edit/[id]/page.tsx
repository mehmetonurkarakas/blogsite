"use client";
import '../../../../global.css'
import {getAdminData} from "@/app/(admin)/adminBackend/getData";
import {Post} from "@/app/dbData/dbData";
import React, {useState} from 'react';
export default function Page({params}: { params: { id: number } }) {
    const id = params.id;
    let sample: Post[] = getAdminData();
    let obj: Post;
    for (obj of sample) {
        if (obj.id == id) {
            break;
        }
    }

    const [inputField, setInputField] = useState({
        title: obj.title,
        content: obj.content,
    })


    const inputsHandler = (e) => {
        const {name, value} = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [topic, setTopic] = useState("");


    const submitButton = async () => {
        console.log(inputField);
        await fetch('/api/hello', {
            method: 'PUT',
            body: JSON.stringify({inputField}),
        })
        alert("Saved")
        console.log()
        // window.location.reload()
    }

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
                        <span className="text">Edit Content</span>
                    </div>
                    <div className="activity">
                        <div className="activity-data">
                            <div className="data-names">
                                <form className="forms">
                                    <label>
                                        <h3>Title</h3>
                                    </label>
                                    <input id="inpt1"
                                           className="inpt"
                                           type="text"
                                           name="title"
                                           value={inputField.title}
                                           onChange={inputsHandler}
                                    />
                                    <h3>Content</h3>
                                    <label>
                                        <input id="inpt2"
                                               className="inpt"
                                               type="text"
                                               name="content"
                                               value={inputField.content}
                                               onChange={inputsHandler}
                                        />
                                    </label>
                                    <button className="button button1"
                                            onClick={submitButton}
                                    >Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}