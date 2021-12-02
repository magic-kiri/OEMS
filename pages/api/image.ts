import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next";
import multer from 'multer';
import { firebaseConfig } from '../firebase/initFirebase'
import FirebaseStorage from 'multer-firebase-storage'
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

// // const app = new Express()

// const upload = multer({
//   storage: FirebaseStorage({
//     bucketName: firebaseConfig.bucketName,
//     credentials: {
//       clientEmail: firebaseConfig.clientEmail,
//       privateKey: firebaseConfig.apiKey,
//       projectId: firebaseConfig.projectId
//     }
//   })
// })

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

type NextApiRequestWithPayload = NextApiRequest & {
  workspaceId: string;
  file: Express.Multer.File;
};


apiRoute.post((req: NextApiRequestWithPayload, res) => {
  console.log('method', req.method)
  console.log('file:', req.file, typeof req.file)
  console.log('body:', req.body)
  res.send({hello: "world"})
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
