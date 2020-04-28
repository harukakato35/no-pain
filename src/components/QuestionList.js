import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import {Link} from 'react-router-dom';

export default function QuestionList() {
    const inquiry = useSelector(state => state.inquiry);
    
  return(
      inquiry.inquiry.map((inquiry)=>(
      <ul>
        <Link to={`/question/detail/${inquiry.id}`}>
          <li>{inquiry.title}</li>
        </Link> 
      </ul>
        ))
  );
}

//ここでglobalを使ってるけど、画面遷移のためだけに存在する

