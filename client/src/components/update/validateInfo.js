
const validateInfo = (values) => {

    let errors = {};

    if (!values.title) {
        errors.title = "Title required"
    }
    if (!values.author) {
        errors.author = "Author required"
    }
    if (!values.article) {
        errors.article = "Article required"
    }

    return errors;
}

export default validateInfo;
