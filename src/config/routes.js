export const ROUTES = {
  home: "/",
  about: "/o-mnie",
  projects: "/projekty",
  updates: "/aktualizacje",
  projectDetails: "/projekty/:id",
};

export const getProjectDetailsPath = (projectId) => {
  return `/projekty/${projectId}`;
};
