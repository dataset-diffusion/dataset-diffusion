import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'

const contentStyle = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'justify',
    background: '#364d79',
};
const bib_ref =
    `@Inproceedings{quangtruong2023@dd,
    title={Dataset Diffusion: Diffusion-based Synthetic Dataset Generation for Pixel-Level Semantic Segmentation},
    author={Quang Ho Nguyen, Truong Vu, Anh Tran, Khoi Nguyen},
    year={2023},
    booktitle={Thirty-Seventh Conference on Neural Information Processing Systems},
}`
const Bibtex = () => {
    return (
        <div name="Section 5" className='container'>
            <div className='bibtex'>
                <h1 className='title'>Bibtex</h1>
                <div className="bibtex-code content" >
                    <pre>
                        <code style={{ fontFamily: 'Consola Mono' }}>{bib_ref}</code>
                    </pre>
                </div>
            </div>
        </div >
    )
}

export default Bibtex