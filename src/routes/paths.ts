export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};
  
export default{
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  activity: `/${rootPaths.pageRoot}/activity`,
  library: `/${rootPaths.pageRoot}/library`,
  schedules: `/${rootPaths.pageRoot}/schedules`,
  settings: `/${rootPaths.pageRoot}/parametres`,
  create_casino: `/${rootPaths.pageRoot}/creer_casino`,
  create_kachika: `/${rootPaths.pageRoot}/creer_kachika`,
  archives: `/${rootPaths.pageRoot}/archives/index`,
  ville_casino: `/${rootPaths.pageRoot}/ville_casino`,
  casino: `/${rootPaths.pageRoot}/casino`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  error: `/${rootPaths.pageRoot}/error/404`,
  blocked: `/${rootPaths.pageRoot}/error/blocked`
};
