const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};

export const postRequest = async (url, data) => {
  const token = window.localStorage.getItem('token');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },

      body: JSON.stringify(data),
    });

    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postFormDataRequest = async (url, formData) => {
  const token = window.localStorage.getItem('token');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },

      body: formData,
    });

    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRequest = async (url) => {
  const token = window.localStorage.getItem('token');

  try {
    const response = await fetch(url);

    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message);
  }
};
