import React from 'react';
import styled from 'styled-components';
import useForm from './useForm';
import validate from './validateInfo';


const NewArticle = () => {


    // CUSTOM HOOK
    const { handleChange, fileHandler, error, values, formSubmitHandler, fileErr} = useForm(validate);

    return (
        <>
            <Container>
                <div className="form__box">
                    <div className="title">Add New Article</div>
                    <form className="form" onSubmit={formSubmitHandler} encType="multipart/form-date">
                        <FormDiv className="form_div">
                            <label htmlFor="title">Title <span>*</span></label>
                            <input 
                                id= "title"
                                type="text" 
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                placeholder="----" 
                            />
                            {error.title && <p>{error.title}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="author">Author <span>*</span></label>
                            <input 
                                id= "author"
                                type="text" 
                                name="author"
                                value={values.author}
                                onChange={handleChange}
                                placeholder="will smith" 
                            />
                            {error.author && <p>{error.author}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="article">Article <span>*</span></label>
                            <textarea 
                                id= "article"
                                type="text" 
                                name="article"
                                value={values.article}
                                onChange={handleChange} 
                                placeholder="----" 
                            ></textarea>
                            {error.article && <p>{error.article}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="image">Article Image<span>*</span></label>
                            <input 
                                id= "image"
                                type="file" 
                                name="image"
                                onChange={fileHandler}
                                placeholder="*****" 
                            />
                            {fileErr && <p>{fileErr}</p>}
                        </FormDiv>
                        <Button type="submit">Post</Button>
                    </form>
                </div>
            </Container>  
        </>
    )
}

export default NewArticle;



// STYLE

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    min-height: calc(100vh - 70px);

    .form__box{
        width: 100%;
        margin: 1.5rem 0;
        padding: 5px;

        .title{
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            font-weight: 500;
        }

        p{
            margin-top: 1rem;

            .link {
                text-decoration: none;
                color: rgb(24, 71, 199);
            }
        }

        form{
            width: 100%;
        }

        @media(min-width:650px){
            width: 450px;
        }
    }
`;

const FormDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    label{
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: .4rem;

        span {
            color: crimson;
        }
    }
    
    input, 
    textarea{
        font-size: 1rem;
        font-weight: 500;
        font-family: "Sen",sans-serif;
        padding: .8rem;
        border-radius: 3px;
        outline: none;
        border: 1px solid #ddd;
    }

    textarea{
        height: 120px;
        resize: none;

        &::-webkit-scrollbar{
            width: 6px;
            cursor: pointer;
        }

        &::-webkit-scrollbar-thumb{
            background: #999;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background: #f4f4f4;
            border-radius: 10px;
        }
    }

    p{
        color: crimson;
        font-weight: 600;
    }
`;

const Button = styled.button `
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Sen',sans-serif;
    padding: .8rem;
    border-radius: 3px;
    outline: none;
    border: none;
    background: #2E7AAC;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
