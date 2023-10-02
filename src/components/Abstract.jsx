import React, { useState } from 'react'

const Abstract = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const contents = [
        {
            id: 1,
            content:
                `
            Preparing training data for deep vision models is a labor-intensive task. To address this, generative models have emerged as an effective solution for generating
            synthetic data. While current generative models produce image-level category
            labels, we propose a novel method for generating pixel-level semantic segmentation labels using the text-to-image generative model Stable Diffusion (SD). By
            utilizing the text prompts, cross-attention, and self-attention of SD, we introduce
            three new techniques: class-prompt appending, class-prompt cross-attention, and
            self-attention exponentiation. These techniques enable us to generate segmentation
            maps corresponding to synthetic images. These maps serve as pseudo-labels for
            training semantic segmenters, eliminating the need for labor-intensive pixel-wise
            annotation. To account for the imperfections in our pseudo-labels, we incorporate
            uncertainty regions into the segmentation, allowing us to disregard loss from those
            regions. We conduct evaluations on two datasets, PASCAL VOC and MSCOCO,
            and our approach significantly outperforms concurrent work.
            `
        },

    ];
    const handleImageChange = (e) => {
        console.log(e.target.value)
        setImageIndex(parseInt(e.target.value))
    }
    return (
        <div name="Section 1" className='container'>
            <div className='abstract'>
                <div>
                    <h1 className='title'>Abstract</h1>
                </div>
                {contents.map(({ id, content }) => (
                    <p key={id} className="content" >
                        {content}
                    </p>
                ))}
            </div>
        </div>

    )
}

export default Abstract