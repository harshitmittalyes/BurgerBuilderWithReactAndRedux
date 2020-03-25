export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
}

export const checkValidity = (value, rules) => {
    if(Object.keys(rules).length === 0)
    {
        return true;
    }
    let isValid = false;
    if(rules.required){
        isValid = value.trim() !== '';
    } 
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    } 
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }     
    return isValid;
}