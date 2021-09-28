import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

const Articles = () => {


    const [article, setArticle] = useState([]);

    // GET ALL ARTICLE DATA
    useEffect(() => {
        axios.get('/api/article')
        .then((res) => {
            setArticle(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [])


    return (
        <>      
            { !article.length ? 
                (
                    <Spinner>
                        <img  src="image/spinner.gif" alt="spinner" />
                    </Spinner>
                ):(
                    <Container>
                        <Box>
                            { article.map((item, index) => (
                                <div key={index}>
                                    <Card item={item}/>
                                </div>
                            ))}
                        </Box>
                    </Container>
                )
            }
        </>
    )
}

export default Articles;



// STYLE

const Spinner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
`;

const Container = styled.div `
    max-width: 1140px;
    margin: 1.5rem auto;
    padding: 0 15px;
`;

const Box = styled.div `
    display: grid;
    grid-gap: 2em;
    
    @media(min-width:1020px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;