import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from '../../image/spinner.gif';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faHome, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const Article = (props) => {

    const [values, setValues] = useState({
        title:'',
        author:'',
        article:'',
    });


    useEffect(() => {
        axios.get(`/api/article/${props.match.params.id}`)
        .then((res) => {
            setValues({
                _id: res.data.data._id,
                title: res.data.data.title,
                author: res.data.data.author,
                article: res.data.data.article,
                image: res.data.data.image,
            })
        })
        .catch((err) => console.log(err))

    }, [props])



    const history = useHistory();

    // DELETE ARTICLE
    const deleteArticle = (id) => {

        axios.delete(`/api/article/delete/${id}`)
        .then(() => {
            history.push('/');
        })
        .catch((err) => {
            console.log(err);
        })
    }
    


    return (
        <>
            <Container>
                {
                !values.title ? (

                     <Spinner>
                        <img  src={Loading} alt="spinner" />
                    </Spinner>
                ): (
                    <>
                        <ArticleBox>
                            <div className="image">
                                <img src={values.image} alt={values.title} />
                            </div>
                            <h3>{values.title}</h3>
                            <p>{values.article}</p>
                            <h4>{values.author}</h4>
                        </ArticleBox>
                        <Action>
                            <Link to='/' className="back"><FontAwesomeIcon icon={ faHome } /> Back</Link>
                            <Link to={{ pathname: `/update/${values._id}` }} className="update"><FontAwesomeIcon icon={ faEdit } /> Update</Link>
                            <button className="delete" onClick={() => deleteArticle(values._id)}><FontAwesomeIcon icon={ faTrashAlt } /> Delete</button>
                        </Action>
                    </>
                    
                )
            }
            </Container>
             
        </>
    )
}

export default Article;



// STYLE

const Spinner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
`;


const Container = styled.div `
    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;
`;

const ArticleBox = styled.div `
    
    .image{
        text-align: center;

        img {
            width: 100%;
        }

        @media(min-width:920px){
            img {
                width: 300px;
            }
        }
    }

    h3 {
        font-size: 3rem;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.4rem;
        margin: 1rem 0;
    }

    h4{
        font-size: 1.5rem;
        font-weight: 500;
        text-align: right;
        text-decoration: underline;
    }

`;


const Action = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    .update,
    .delete,
    .back{
        margin: 1rem;
        border: none;
        outline: none;
        font-family: 'Sen',sans-serif;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        padding: .8rem 1rem;
        cursor: pointer;
        border-radius: 3px;
        color: #000;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .update{
        background: lightgreen;
    }

    .delete{
        background: lightcoral;
    }

    .back{
        background: lightblue;
    }


`;