import React , { useState } from 'react';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CommentBlock.css'



function Comments() {

    function CommentModel(id,title){

        return {
            id,
            title
        }
    }

    const [show, toggleShow] = useState(false);
    const [comment,setComment] = useState([])
    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')



    const handleInputChange = (event) => {
        setFirstInput(event.target.value)
    }
    const handleInputChanges = (event) => {
        setSecondInput(event.target.value)
    }
    const commentReducer = {
        remove: id => 
        setComment(comment.filter(t => t.id != id)),
        add:(title) => 
        setComment([...comment,new CommentModel(comment.length,title)])
    }
    const handleAddComment = (e) => {
        if(firstInput != '' && secondInput != ''){
            commentReducer.add(firstInput + ' : ' + secondInput)
            setFirstInput('')
            setSecondInput('')
            toggleShow(!show)
        }
    }
        
        return (
          <div>
            {show &&
                 <div className='input-block'>
                    <input type="text" 
                    className='input' 
                    placeholder='Name' 
                     onChange={handleInputChange}
                    />
                    <input type="text" 
                     className='input' 
                     placeholder='Message'
                     onChange={handleInputChanges} />
                    <button className='btn' onClick={handleAddComment}>Add Comment</button>
                </div>
             }
            <FontAwesomeIcon icon={faComment} className='post-coment' onClick={() => toggleShow(!show)}/>
            <h1>Comments</h1>
            {
            comment.map( t => 
                <ul className='comment-block'>
                    <li key={t.id}  className='comment-text'><b></b>{t.title}</li>
                    <FontAwesomeIcon icon={faTimes} className='delete-icon' onClick={() => commentReducer.remove(t.id)}/>
                </ul>
                )  
            }
          </div> 
        )         
}

export default Comments
