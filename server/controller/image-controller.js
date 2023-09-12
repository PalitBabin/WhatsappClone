import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const URL='http://localhost:8000';

let gfs,gridFsBucket;
const conn = mongoose.connection;

conn.once('open',()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    })

    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
});


export const uploadFile = async(req,res)=>{
   
        if(!req.file){
            return res.status(404).json('file not found!');
        }
        const imageUrl = `${URL}/file/${req.file.filename}`;

        return res.status(200).json(imageUrl);
 

}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }

        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (err) {
        console.error('Error while fetching image:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
