export const imageUpload = async (images) => {
    let imgArr = []
    for(const item of images){
        const formData = new FormData()
        formData.append("file", item)
        formData.append("upload_preset", process.env.CLOUD_UPDATE_PRESET)
        // formData.append("upload_preset", 'next_folder')
        formData.append("cloud_name", process.env.CLOUD_NAME)
        // const res = await fetch('https://api.cloudinary.com/v1_1/ `$(process.env.CLOUD_NAME)`/upload', {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`, {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}