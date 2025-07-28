import Fastify from 'fastify';
import projectRoutes from './modules/project/project.route';
import cors from '@fastify/cors';

export function buildServer() {
  const app = Fastify({ logger: true });

  app.register(cors);
  // Home Route
app.get('/', async (req, res) => {
res.type('text/html').send('<h1>✅ Portify Backend is Running</h1>')
})
  app.register(projectRoutes, { prefix: '/api/projects' });

  return app;
}
