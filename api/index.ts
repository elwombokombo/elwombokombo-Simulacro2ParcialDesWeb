export const getJokes = async () => {
  const url = 'http://10.0.2.2:3000/api/tasks';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error('An error happened');
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const addJoke = async (newJoke) => {
  const url = 'http://10.0.2.2:3000/api/tasks';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJoke),
    });
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error('error');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteJoke = async (taskId) => {
  const url = `http://10.0.2.2:3000/api/tasks/${taskId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (response.ok) {
      return true;
    } else {
      console.error('An error occurred while deleting the joke');
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
