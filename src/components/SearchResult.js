import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchResult(){
    const inquiryTitles = useSelector(state => state.title.inquiryTitles);
    const listItems = inquiryTitles.map((inquiryTitle)=>
        <li key={inquiryTitle.id}>
          {inquiryTitle.id}
        </li>
    );
    
 return(
    <div>
        {listItems}
    </div>
       );
}

