import { prisma } from './project.model';
import { CreateProjectInput } from './project.schema';

export const createProject = async (input: CreateProjectInput) => {
  return prisma.project.create({ data: input });
};

export const getAllProjects = async () => {
  return prisma.project.findMany();
};
