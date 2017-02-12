const isProduction = (process.env.NODE_ENV === 'production')
export const url = isProduction ? 'test' : 'http://localhost:3001'
