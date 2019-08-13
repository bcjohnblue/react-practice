module.exports = function(plop) {
  const projectFolderName = 'Game';
  const path = `../src/projects/${projectFolderName}/{{folderName}}/{{fileName.capital}}/{{fileName.capital}}`;

  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'Please enter folder name',
        filter: folderName => {
          switch (folderName) {
            case 'comp':
              return 'components';
            default:
              return folderName;
          }
        }
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Please enter file name',
        filter: fileName => {
          const firstLetter = fileName.charAt(0).toUpperCase();
          const upperToHyphenLower = (match, offset, string) => {
            return (offset ? '_' : '') + match.toLowerCase();
          }

          return {
            capital: firstLetter + fileName.slice(1),
            styles: fileName.replace(/[A-Z]/g, upperToHyphenLower)
          };
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${path}.jsx`,
        templateFile: 'templates/jsx.hbs'
      },
      {
        type: 'add',
        path: `${path}.module.sass`,
        templateFile: 'templates/sass.hbs'
      }
    ]
  });
};
