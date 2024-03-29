import { useState, useEffect, useRef } from 'react'
import gdata from './Gallery.json'

export default function GalleryCard({imgUrl, title, ptitle, ktag}) {
    console.log(gdata)
    
    if (ktag.includes(",")){
        ktag = ktag.split(",").map((item) => (
        <span
        key={item}
        className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2"
      >{`#${item}`}</span>
        ));
    }

    return (
        <div className="max-w-sm h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgUrl} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {ptitle}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {ktag}    
                </div>
        </div>
    )
}
