export default defineConfig({
    server: {
      middlewareMode: 'html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          console.log('Request URL:', req.url);
          next();
        });
      }
    }
  });
  