import Fastify from 'fastify';
import projectRoutes from './modules/project/project.route';
import cors from '@fastify/cors';

export function buildServer() {
  const app = Fastify({ logger: true });

  app.register(cors);
  app.register(projectRoutes, { prefix: '/api/projects' });

  return app;
}
