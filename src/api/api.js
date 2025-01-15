
const handleResponse = async (response) => {
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
}

export const postRequest = async (url, data) => {
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)
        });

        return await handleResponse(response);

    } catch (error) {

        throw new Error(error.message);
        
    }
}


export const getRequest = async (url) => {

    try {
        const response = await fetch(url);

        return await handleResponse(response);

    } catch (error) {

        throw new Error(error.message);
    }
}