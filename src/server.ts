import Fastify from 'fastify'
import path from 'path'
import cors from '@fastify/cors'
import staticPlugin from '@fastify/static'
import projectRoutes from './modules/project/project.route'
export function buildServer() {
  const app = Fastify({ logger: true });

  app.register(cors);
  // // Home Route
  // app.get('/', async (req, res) => {
  //     res.type('text/html').send('<h1>✅ Portify Backend is Running</h1>')
  // })

  // Serve static files from /public
  app.register(staticPlugin, {
    root: path.join(__dirname, '..', 'public'),
    prefix: '/', // so /index.html works
  })
  app.register(projectRoutes, { prefix: '/api/projects' });

  return app;
}
