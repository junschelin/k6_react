import GalleryCard from './GalleryCard'
import gdata from './Gallery.json'
import TailButton from '../06/TailButton';
import TailInput from '../10/TailInput';
import { useEffect, useRef, useState } from 'react';

export default function GalleryMain() {
    const keyword = useRef() ; 
    const handleKeyword = () => {

    }

    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();



    useEffect(() => {
        if(!tdata) return ;

        let tm = tdata.map(item => <GalleryCard imgUrl = {item.galWebImageUrl.replace("http", "https")}
            title = {item.galTitle}
            ptitle = {item.galPhotographyLocation}
            ktag = {item.galSearchKeyword} /> )
        
        setTags(tm)

    }, [tdata])

    const handleFetch = () => {
        if (keyword.current.value == ''){
            alert('키워드를 입력하세요.');
            keyword.current.focus();
            return;
        }
        let w = encodeURI(keyword.current.value);
        console.log(w);

        getData(w);
    }

    const handleClear = () => {
        setTags('');
        setTdata('');
        keyword.current.value = '';
        keyword.current.foucs();
    }

    const getData = (w) => {
        console.log(w);
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?"
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${w}&_type=json`
    
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err))
    }

  return (
    <div className='w-11/12 flex flex-col
                    mt-5
                    h-full justify-start items-center'>
        <div className='w-full p-2 gap-4 items-center
                        grid grid-cols-1 md:grid-cols-3 
                        bg-slate-200'>
            <div className='p-2'>
                <TailInput 
                        type="text" 
                        inputRef = {keyword}
                        ph = "키워드 입력"
                        handleChange= {handleKeyword}/>
            </div>
            <div className='px-3'>
                <TailButton caption = "조회"
                            color = "blue"
                            handleClick = {handleFetch} />
            </div>
            <div className='px-3'>
                <TailButton caption = "취소"
                            color = "red"
                            handleClick = {handleClear} />
            </div>
        </div>
        <div className='mt-2 w-full p-2 gap-4 items-center
                        grid grid-cols-1 md:grid-cols-3 '>
        {tags}
        </div>
    </div>
  );
}


