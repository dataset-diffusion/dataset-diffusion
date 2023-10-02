import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Fragment } from 'react';

const contentStyle = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Content = () => {

    
    const contents = [
        {
            id: 1,
            content: `We propose a class-prompt appending technique to improve the quality of text prompts for generating synthetic segmentation datasets. 
            This involves taking the original image captions and appending the class labels for all objects present in the image. For example, an original caption like 
            "a woman standing in a kitchen" would be modified to "a woman standing in a kitchen; person sink refrigerator oven cabinet". 
            This ensures the text prompt covers all target classes in the dataset, even if the original caption missed some objects. 
            Appending the class labels directly addresses issues of mismatch between caption terms and dataset classes, and missing classes in the captions. 
            The improved prompts better guide the synthetic data generation process.`,
            link: '/static/images/prompt_common_problem2-1.png',
            caption: ` Common issues of using provided (or generated) captions. Red classes are often missing
            from the captions, resulting in a lack of text prompts for those classes. Blue classes may have different
            terms used in the captions, causing a discrepancy between the target class names and the text prompts.`,
            figure_id: 1,
            title: "Prompting",
            tag: "prompt"
        },
        {
            id: 2,
            content: `We introduce class-prompt cross-attention produced by only taking the softmax over the class name part rather than entire of the text 
            prompt. In practice, we form a new text prompt that is the same as the class name, just for the purpose of extracting the cross-attention maps 
            while the original text prompt for generating images keeps unchanged. After this process, we will obtain the cross-attention respect to the class
            name.\n\n
            Although the cross-attention maps already exhibit the location of the target classes in the image,
            they are still coarse-grained and noisy. Thus, we propose to use the self-attention map 
            to enhance the cross-attention maps for a more precise object location. This is because the self-attention maps capturing the pairwise correlations among positions within
            the latent code can help propagate the initial cross-attention maps to the highly similar positions, e.g., non-salient parts of the object, 
            thereby enhancing their quality. Therefore, we propose self-attention exponentiation where the self-attention map  is powered to 
            a hyper-parameter before multiplying to the cross-attention map.
            `,
            link: '/static/images/mask_generation.png',
            caption: `Given a text prompt “A bike is parked in a room; bicycle”, we obtain the generated image, 
                    cross-attention map, enhanced cross-attention map by the self-attention with different values of hyper-paramter 
                    and mask with uncertainty value (white region)`,
            figure_id: 0,
            title: "Utilizing the Self + Cross Attention Maps",
            tag: "attention",
            carousel: [
                {
                    id: 2,
                    link: '/static/images/self_attention6.png',
                    label: "Correlation maps at some positions with others, extracted from a self-attention map"
                },
                {
                    id: 3,
                    link: '/static/images/self_attention.png',
                    label: "Correlation maps at some positions with others, extracted from a self-attention map"
                },
            ]
        },

    ];
    return (
        <div name="Section 3" className='container'>
            <div className='main-content'>
                <div>
                    <h1 className='title'>Methods</h1>
                </div>
                {contents.map(({ id, content, link, title, caption, figure_id, carousel }) => (
                    <>
                        <div>
                            <h2 className="inner-title">{title}</h2>
                        </div>
                        <div className='content-div'>
                            <p key={id} className="content">
                                {content.split('\n\n').map((item, key) => (
                                    <Fragment key={key}>
                                        {item}
                                        <br />
                                    </Fragment>
                                ))}

                            </p>
                            {link ?
                                (
                                    <>
                                        <img className='figure' src={link} alt=""></img>
                                        <div className='figure-caption'>{caption}</div>
                                    </>
                                )
                                : (<br />)
                            }
                            <div className='.'>
                                {carousel ? (
                                    <Carousel 
                                    showArrows={false}
                                    showThumbs={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    interval={500}
                                    >
                                        {carousel.map(({ id, link, label }) => ( // Added 'id' to the carousel map function
                                            <div key={id}> {/* Added key prop */}
                                                <img src={link} />
                                                <p className="legend">{label}</p>
                                            </div>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <br />
                                )}
                            </div>
                        </div>
                    </>
                ))}
                {/* <div className='img'>
                    <img src='/static/images/mask_generation.png'></img>
                </div> */}
            </div>
        </div>

    )
}

export default Content
