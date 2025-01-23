import imageCompression from 'browser-image-compression';
const _apiUrl = "http://sewnash-api-env.eba-t3mcrd2m.us-east-1.elasticbeanstalk.com/api/photo";

export const uploadClassPhoto =  async (file, classId) => {
    const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 1920, // Max width or height
        useWebWorker: true, // Use web worker for faster compression
    };

    try {
        // Compress the image file
        const compressedFile = await imageCompression(file, options);

        // Create FormData and append the compressed file
        const formData = new FormData();
        formData.append("file", compressedFile);

        // Upload the compressed file
        return fetch(`${_apiUrl}/upload?classId=${classId}`, {
            method: 'POST',
            body: formData
        });
    } catch (error) {
        console.error('Error compressing image:', error);
        throw error;
    }
        
}
export const getClassPhoto = (classId) => {
    return fetch(`${_apiUrl}/class/${classId}`).then(res => res.json())
}

export const deletePhoto = (photoId) =>{
    return fetch(`${_apiUrl}/${photoId}`, {
        method: 'DELETE'
    })
}

export const setMainPhoto = (classId, photoId) => {
    const token = localStorage.getItem('token');
    return fetch(`${_apiUrl}/class/${classId}/setmain/${photoId}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
}