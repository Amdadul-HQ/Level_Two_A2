import mongoose from 'mongoose';
import app from "./app";
import config from "./app/config";


async function main() {

  try{
    await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(error:any){
    throw Error(error.message as string)
  }
}

main()

