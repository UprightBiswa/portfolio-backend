import { FastifyReply, FastifyRequest } from 'fastify';
import { createProjectSchema } from './project.schema';
import * as service from './project.service';

export async function createProjectHandler(req: FastifyRequest, reply: FastifyReply) {
  const body = await createProjectSchema.parseAsync(req.body);
  const project = await service.createProject(body);
  reply.code(201).send(project);
}

export async function getProjectsHandler(req: FastifyRequest, reply: FastifyReply) {
  const projects = await service.getAllProjects();
  reply.send(projects);
}
