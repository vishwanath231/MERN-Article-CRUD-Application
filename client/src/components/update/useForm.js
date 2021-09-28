import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useForm = (props , validate) => {


    const [values, setValues] = useState({
        title: '',
        author:'',
        article: ''
    })
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileErr, setFileErr] = useState("");


    // TEXT
    const handleChange = (e) => {
        const {name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const [fileName, setFileName] = useState("");

    // FILE
    const fileHandler = (e) => {
        setFileName(e.target.files[0]);
    }


    const histroy = useHistory();


    // SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(validate(values));

        if (Object.keys(error).length === 0  && isSubmitting) {
            
            if (fileName !== "") {
                
                if (fileName.name.match(/.(jpg|jpeg|png)$/i)) {

                    const formData = new FormData();

                    formData.append("title", values.title);
                    formData.append("author", values.author);
                    formData.append("article", values.article);
                    formData.append("image", fileName);

                    axios.put(`/api/article/update/${props.match.params.id}`, formData)
                    .then(() => {
                        histroy.push('/');
                    })
                    .catch((err) => {
                        console.log(err);
                    })

                }else{
                    setFileErr('File type is not supported')
                }

            }else{
                setFileErr("Image required");
            }
        }
    }



    // GET ARTICLE DATA
    useEffect(() => {
        axios.get(`/api/article/${props.match.params.id}`)
        .then((res) => {
            setValues({
                title: res.data.data.title,
                author: res.data.data.author,
                article: res.data.data.article
            })
        })
        .catch((err) => {
            console.log(err);
        })

    }, [props])




    return { handleChange, fileHandler, handleSubmit, values, error, fileErr }
}

export default useForm;
