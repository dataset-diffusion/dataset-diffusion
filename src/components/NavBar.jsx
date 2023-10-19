import React, { useState } from 'react'

import { Link } from 'react-scroll'

// const video_src = "../assets/Dataset-Diffusion.mp4";
import video_src from '../assets/videos/Dataset-Diffusion.mp4';

const NavBar = () => {
    const [navButton, setNavButton] = useState(false)

    const social_info = [
        {
            id: 1,
            title: "PDF",
            link: "https://arxiv.org/pdf/2309.14303.pdf",
            icon: "fas fa-file-pdf"
        },
        {
            id: 2,
            title: "arXiv",
            link: "https://arxiv.org/abs/2309.14303",
            icon: "ai ai-arxiv"
        },
        {
            id: 1,
            title: "Github",
            link: "https://github.com/VinAIResearch/Dataset-Diffusion",
            icon: "fab fa-github"
        },
    ]
    const links = [
        {
            id: 1,
            title: "Section 1"
        },
        {
            id: 2,
            title: "Section 2"
        },
        {
            id: 3,
            title: "Section 3"
        },
        {
            id: 4,
            title: "Section 4"
        },

    ];
    const authors = [
        {
            id: 1,
            name: "Quang Nguyen",
            link: "https://quang-ngh.github.io",
            affi: "1,2"
        },
        {
            id: 2,
            name: "Truong Vu",
            link: "",
            affi: "1"
        },

        {
            id: 3,
            name: "Anh Tran",
            link: "https://scholar.google.com/citations?user=FYZ5ODQAAAAJ&hl=en",
            affi: "1"
        },
        {
            id: 4,
            name: "Khoi Nguyen",
            link: "https://www.khoinguyen.org",
            affi: "1"
        },
    ];
    return (
        <div className='container navbar'>
            <div className='navbar'>
                <div>
                    <h1 className='nav-title paper-title' >Dataset Diffusion: Diffusion-based Synthetic Dataset Generation for Pixel-Level Semantic Segmentation</h1>
                </div>
                <p className="nav-authors">
                    {authors.map(({ id, name, link, affi }) => (
                        <li key={id} >
                            <a href={link}>{name}<sup>{affi}</sup></a>
                        </li>
                    ))}
                </p>
                <p className="nav-authors">
                    <li id="enterprise"><a href="https://www.vinai.io/"><sup>1</sup>VinAI Research</a></li>
                    <li id="enterprise"><a href="https://oisp.hcmut.edu.vn/en/"><sup>2</sup>Ho Chi Minh City University of Technology</a></li>
                </p>
                <div>
                    <h3 className='nav-title'>NeurIPS2023</h3>
                </div>
                <ul className='social-link'>
                    {social_info.map(({ id, title, link, icon }) => (
                        <li key={id} className='social-content'>
                            <a href={link}>
                                <span className="icon">
                                    <i className={icon}></i>
                                </span>
                                <span>{title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                {/* <video className='video-teaser' autoplay='' loop muted controls>
                    <source src={video_src} type="video/mp4" />
                </video> */}
                <div className='image-teaser'>
                    <img width="100%" src='/static/images/main_diagram8-1.png' />
                </div>
                
            </div>
        </div>
    )
}

export default NavBar