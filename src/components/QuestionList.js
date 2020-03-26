import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import {Link} from 'react-router-dom';

export default function QuestionList() {
    const inquiryTitles = useSelector(state => state.title.inquiryTitles);
    
  return(
      inquiryTitles.map((inquiryTitle)=>(
      
      <Link to={`/question/detail/${inquiryTitle.id}`}>
        Show details
      </Link> 
        ))
  );
}

//ここでglobalを使ってるけど、画面遷移のためだけに存在する

