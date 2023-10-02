import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Results = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageChange = (e) => {
    console.log(e.target.value)
    setImageIndex(parseInt(e.target.value))
  }

  const contents = [
    {
      id: 1,
      content:
        `
     Our objective is to generate a synthetic dataset $D = (I_i, S_i)^{N}_{i=1}$, consisting of
      high-fidelity images $I$ and pixel-level semantic masks $S$. These images and masks capture both the
      semantic and location information of the target classes $C = {c_1, c_2, ..., c_K}$, where $K$ represents
      the number of classes. The purpose of constructing this dataset is to train a semantic segmenter Φ
      without relying on human annotation. 
      `,
      title: "Problem setting"
    },

  ];

  const carousel = [
    {
      id: 1,
      link: '/static/images/qualitatives/1.png'
    },
    {
      id: 2,
      link: '/static/images/qualitatives/2.png'
    },
    {
      id: 3,
      link: '/static/images/qualitatives/3.png'
    },
    
    {
      id: 4,
      link: '/static/images/qualitatives/4.png'
    },
    
    {
      id: 5,
      link: '/static/images/qualitatives/5.png'
    },
    
    {
      id: 6,
      link: '/static/images/qualitatives/6.png'
    },
    
    {
      id: 7,
      link: '/static/images/qualitatives/7.png'
    },
    
    {
      id: 8,
      link: '/static/images/qualitatives/8.png'
    },
    
    {
      id: 9,
      link: '/static/images/qualitatives/9.png'
    },
    
    {
      id: 10,
      link: '/static/images/qualitatives/10.png'
    },
    
    {
      id: 11,
      link: '/static/images/qualitatives/11.png'
    },
    {
      id: 12,
      link: '/static/images/qualitatives/12.png'
    },
    {
      id: 13,
      link: '/static/images/qualitatives/13.png'
    }
  ]
  return (
    <>
      <div name="Section 4" className='container'>
        <div className='motivation'>
          <div>
            <h1 className='title'>Results</h1>
          </div>
          <div className='content'>
            <p>
              Dataset Diffusion presents a novel approach for generating high-quality synthetic semantic segmentation datasets. 
              By harnessing the power of Stable Diffusion, Dataset Diffusion is able to produce photorealistic images with precise semantic 
              segmentation masks for user-specified object classes. As evidenced by our experimental results, Dataset Diffusion significantly 
              outperforms existing methods like DiffuMask, achieving state-of-the-art performance with an mIoU of 64.8 on PASCAL VOC and 34.2 on MSCOCO (read our main paper
              <a href="https://arxiv.org/pdf/2309.14303.pdf"> here</a>). 
              The generated images and segmentation masks are highly realistic, as can be seen in the figures below. 
              This demonstrates the potential of leveraging generative adversarial networks like Stable Diffusion to synthesize 
              datasets with accurate annotations for training semantic segmentation models.
            </p>
          </div>
          <div className='image-carousel'>
            <Carousel showArrows={false}
                      showThumbs={false}
                      autoPlay={true}
                      interval={1000}
                      stopOnHover={true}>
                {carousel.map(({ id, link, label }) => ( // Added 'id' to the carousel map function
                    <div key={id}> {/* Added key prop */}
                        <img src={link} />
                        <p className="legend">{label}</p>
                    </div>
                ))}
            </Carousel>
          </div> 
        </div>

      </div>
    </>


  )
}

export default Results;