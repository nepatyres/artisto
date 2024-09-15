import { NextApiRequest } from 'next';

export interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
  buffer: Buffer;
  stream?: NodeJS.ReadableStream;
}

export interface MulterRequest extends NextApiRequest {
  files: MulterFile[];
}

export default MulterRequest;