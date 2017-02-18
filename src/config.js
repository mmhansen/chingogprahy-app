const isProduction = (process.env.NODE_ENV === 'production')
export const url = isProduction ? 'https://chingography.herokuapp.com' : 'http://localhost:3001'
