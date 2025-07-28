import { FastifyInstance } from 'fastify';
import { createProjectHandler, getProjectsHandler } from './project.controller';

export default async function projectRoutes(server: FastifyInstance) {
  server.post('/', createProjectHandler);
  server.get('/', getProjectsHandler);
}
