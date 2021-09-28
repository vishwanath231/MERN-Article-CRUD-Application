
const validateInfo = (values) => {


    let errors = {};

    if (!values.title) {
        errors.title = "Title Required"
    }
    if (!values.author) {
        errors.author = "Author Required"
    }
    if (!values.article) {
        errors.article = "Article Required"
    }

    

    return errors;
}

export default validateInfo;
