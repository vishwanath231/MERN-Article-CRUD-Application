
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useForm = (validate) => {

    
    const [fileErr, setFileErr] = useState("");
    
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [values, setValues] = useState({
        title:'',
        author:'',
        article: ''
    })

    // TEXT
    const handleChange = (e) => {
        const { name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        })
    }
    
    
    
    const [fileName, setFileName] = useState("");

    // FILE 
    const fileHandler = (e) => {
        setFileName(e.target.files[0]);
    }


    const histroy = useHistory();


    // SUBMIT 
    const formSubmitHandler = (e) => {
        e.preventDefault();

        setError(validate(values));
        setIsSubmitting(true)

        if (Object.keys(error).length === 0 &&  isSubmitting ) {
            if (fileName !== "") {
                
                if (fileName.name.match(/.(jpg|jpeg|png)$/i)) {
                    const formData = new FormData();
                    formData.append("title", values.title);
                    formData.append("author", values.author);
                    formData.append("article", values.article);
                    formData.append("image", fileName);

                    axios.post(`/api/article/new`, formData)
                    .then((res) => {
                        histroy.push('/');
                    })
                    .catch((err) => console.log(err.response.data))
                }else{
                    setFileErr('File type is not supported')
                }

            }else{
                setFileErr('Image required')
            }
        }
    }



    return { handleChange, values, error, fileHandler, formSubmitHandler , fileErr}
}

export default useForm;
