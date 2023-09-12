


export const formatDate = (date)=>{

    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours<10 ? '0'+ hours : hours}:${minutes<10 ? '0'+ minutes : minutes}`;
}

export const handleMedia = async (e, originalImage) => {
    e.preventDefault();
    try {
        if (!originalImage) {
            console.error('Original image is not provided');
            return;
        }

        fetch(originalImage)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;

            const nameSplit = originalImage.split("/");
            const duplicateName = nameSplit.pop();

            // the filename I want
            a.download = "" + duplicateName + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.log('Error while downloading the image ', error))

    } catch (error) {
        console.log('Error while downloading the image ', error);
    }
}
