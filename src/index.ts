import server from './server';


const start = async () => {
  await server.setup();
  server.app.listen(1337, async (error) => {
    if (error) {
      console.log(error);
    }
    return console.log(`TS Server running on 1337`);
  });
}
start();
