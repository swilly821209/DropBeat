export default {
  scan: {
    dirs: ['src'],
    exclude: [
      'node_modules',
      '.git',
      'public/**/*',
      '*.template.html',
      'index.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
}
