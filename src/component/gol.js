import React, { useState } from 'react'
// import mega from '../images/mega.png'
// import mega1 from '../images/mega1.png'
// import mega2 from '../images/mega3.png'
function Gol() {
    const [img, setImg] = useState([
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-36.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-37.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-05.png",

        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-02.png",

        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png",

        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-10.png"
        },
        {
            imgSrc: "https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png"
        },

    ])
    return (
        <>
            <div className="container mt-2">
                {img.map((e, i) =>
                    <img src={e.imgSrc} style={{ width: "100px", paddingLeft: "10px", }} />
                
                )}
            </div>
           
        </>
    )
}

export default Gol