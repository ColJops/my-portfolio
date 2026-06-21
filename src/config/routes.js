export const ROUTES = {
  home: "/",
  about: "/o-mnie",
  projects: "/projekty",
  projectDetails: "/projekty/:id",
};

export const getProjectDetailsPath = (projectId) => {
  return `/projekty/${projectId}`;
};