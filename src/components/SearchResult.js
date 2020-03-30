import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function SearchResult(){
    const inquiryTitles = useSelector(state => state.title.inquiryTitles);



  return(
      inquiryTitles.map((inquiryTitle)=>(
      <Link to={`/question/detail/${inquiryTitle.id}`}>
        Show details
      </Link> 
        ))
  );
}
